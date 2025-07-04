import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        usernameOrEmail: { label: "Kullanıcı Adı veya E-posta", type: "text" },
        password: { label: "Şifre", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.usernameOrEmail || !credentials?.password) {
          throw new Error("Tüm alanlar zorunludur");
        }

        const user = await prisma.user.findFirst({
          where: {
            OR: [
              { email: credentials.usernameOrEmail.toLowerCase() },
              { username: credentials.usernameOrEmail.toLowerCase() },
            ],
          },
        });

        if (!user) {
          throw new Error("Kullanıcı bulunamadı");
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordMatch) {
          throw new Error("Şifre hatalı");
        }

        return {
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          username: user.username,
          avatar: user.avatar ?? "",
          firstName: user.firstName,
          lastName: user.lastName,
          password: user.password,
          createdAt: user.createdAt,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: {
        id?: string;
        username?: string | null;
        avatar?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        email?: string | null;
      };
    }) {
      if (user) {
        token.id = user.id!;
        token.username = user.username || "";
        token.avatar = user.avatar || "";
        token.firstName = user.firstName || "";
        token.lastName = user.lastName || "";
        token.email = user.email || "";
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.avatar = token.avatar as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
