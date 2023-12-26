import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import prisma from "./prisma";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
  // adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_CLIENT_ID_GOOGLE as string,
      clientSecret: process.env.NEXTAUTH_SECRET_KEY_GOOGLE as string,
    }),
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
          credentials.password,
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
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      }
      if (account?.provider === "google") {
        token.id = user?.id;
        token.name = user?.name;
        token.email = user?.email;
        token.picture = user?.image;

        const userInDb = await prisma.users.findUnique({
          where: { email: token.email as string },
        });

        if (!userInDb) {
          await prisma.users.create({
            data: {
              email: token.email as string,
              username: token.name as string,
              avatar: token.picture,
              password: "google-acc",
            },
          });
        } else {
          await prisma.users.update({
            where: {
              email: token.email as string,
            },
            data: {
              email: token.email as string,
              username: token.name as string,
              avatar: token.picture,
            },
          });
        }
      }
      return token;
    },
    async session({ session, token }) {
      console.log("IN SESSION", token, session);
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
    },
  },
};
