import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { ENVIRONMENT_VARIABLES } from "./env";

const { GITHUB_ID, GITHUB_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } =
	ENVIRONMENT_VARIABLES;

export const options = {
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
	pages: {
		signIn: "/signIn",
	},
};
