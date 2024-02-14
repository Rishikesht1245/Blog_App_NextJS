import NextAuth, { Account, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
import { User as Users } from "./models";

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
  ],
  callbacks: {
    async signIn(params: {
      user: User | AdapterUser;
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
