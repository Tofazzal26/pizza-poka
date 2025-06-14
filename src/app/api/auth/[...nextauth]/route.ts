import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";
import UserModel from "@/UserModel/UserModel";
import type { User, Account, Profile } from "next-auth";
import { Document } from "mongoose";
interface IUser extends User {
  _id: string;
  password: string;
}

const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_SECRET as string,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<User | null> {
        if (!credentials) return null;

        const { email, password } = credentials;
        if (!email || !password) return null;

        await ConnectMongoose();
        const currentUser = (await UserModel.findOne({ email })) as
          | (Document & IUser)
          | null;

        if (!currentUser) return null;

        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) return null;

        return {
          id: currentUser._id.toString(),
          name: currentUser.name,
          email: currentUser.email,
          image: currentUser.image,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GoogleCLIENT as string,
      clientSecret: process.env.GoogleSECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GitHubClientID as string,
      clientSecret: process.env.GitHubClientSecret as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: User;
      account: Account | null;
    }): Promise<boolean | string> {
      await ConnectMongoose();
      const { email } = user;

      if (!email) {
        return "Missing email";
      }

      if (account?.provider === "google" || account?.provider === "github") {
        const exist = await UserModel.findOne({ email });

        if (!exist) {
          await UserModel.create(user);
        }
      }
      return true;
    },
  },
};

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
