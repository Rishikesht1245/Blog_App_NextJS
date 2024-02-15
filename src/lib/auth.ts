import NextAuth, { Account, Profile, User } from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
import { User as Users } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

// Function to login using credentials
const login = async (credentials: any) => {
  try {
    connectToDb();
    const user = await Users.findOne({ username: credentials.username });

    if (!user) return { error: "Wrong credentials!" };

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) return { error: "Wrong credentials!" };

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Signin using user credentials and password
    CredentialsProvider({
      //credentials contains the data which we provided while invoking singIn method with credentials as provider
      async authorize(credentials: any): Promise<any> {
        try {
          //Calling the login function defined in top
          const user = await login(credentials);
          //What ever we return from here will be caught by the authconfig.callback and inside the jwt function
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn(params: {
      user: User;
      account: Account | null;
      profile?: Profile | undefined;
    }): Promise<boolean> {
      //Modifying the Sign in method to save data in DB if user is signing for the first time using github
      try {
        if (params?.account?.provider === "github") {
          connectToDb();

          const user = await Users.findOne({ email: params?.profile?.email });

          if (!user) {
            const newUser = new Users({
              username: params?.profile?.login,
              email: params?.profile?.email,
              password: "Password@1245",
              image: params?.profile?.avatar_url,
            });

            await newUser.save();
          }
        }
        return true;
      } catch (error) {
        console.error("Sign in error:", error);
        //Return false will not allow the user to authenticate
        return false;
      }
    },
    ...authConfig.callbacks,
  },
});
