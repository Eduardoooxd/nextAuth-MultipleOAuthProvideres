import { z } from "zod";

const EnvironmentVariablesSchema = z.object({
	NEXTAUTH_URL: z.string().url(),
	GITHUB_ID: z.string(),
	GITHUB_SECRET: z.string(),
	GOOGLE_CLIENT_ID: z.string(),
	GOOGLE_CLIENT_SECRET: z.string(),
	DATABASE_URL: z.string().url(),
});

export const ENVIRONMENT_VARIABLES = EnvironmentVariablesSchema.parse(
	process.env,
);
