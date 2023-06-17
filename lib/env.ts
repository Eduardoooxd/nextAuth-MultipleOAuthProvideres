import { z } from "zod";

const EnvironmentVariablesSchema = z.object({
	NEXTAUTH_URL: z.string().url(),
	GITHUB_ID: z.string(),
	GITHUB_SECRET: z.string(),
	GOOGLE_CLIENT_ID: z.string(),
	GOOGLE_CLIENT_SECRET: z.string(),
	// TODO REMOVE OPTIONAL
	//DATABASE_URL: z.string().url().optional(),
});

export const ENVIRONMENT_VARIABLES = EnvironmentVariablesSchema.parse(
	process.env,
);
