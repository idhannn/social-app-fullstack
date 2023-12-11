import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import prisma from "./prisma";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Username",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const userInDb = await prisma.users.findUnique({
          where: { email: credentials?.email },
        });

        const passwordIsValid = await compare(
          credentials?.password,
          userInDb?.password as string
        );

        if (!passwordIsValid) return null;

        if (credentials?.email !== userInDb?.email) return null;

        return {
          id: userInDb?.id,
          name: userInDb?.username,
          email: userInDb?.email,
          image: userInDb?.avatar,
        };
      },
    }),
  ],
};
