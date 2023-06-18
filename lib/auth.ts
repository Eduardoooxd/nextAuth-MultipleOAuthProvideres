import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./db";
import { ENVIRONMENT_VARIABLES } from "./env";

const { GITHUB_ID, GITHUB_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } =
	ENVIRONMENT_VARIABLES;

export const options: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		// TODO REMOVE THIS
		async session({ session, user, token }) {
			console.log("session", session);
			console.log("user", user);
			console.log("token", token);
			if (session.user) {
				// ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
			}

			return session;
		},
	},
};
