import NextAuth, { Account, Profile, User } from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
import { User as Users } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// Function to login using credentials
const login = async (credentials: any) => {
  try {
    connectToDb();
    const user = await Users.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

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
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Signin using user credentials and password
    CredentialsProvider({
      async authorize(credentials: any): Promise<any> {
        try {
          const user = await login(credentials);
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
      try {
        console.log(params?.account?.provider);
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
  },
});
