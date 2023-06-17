import { LoginButton } from "@/components/loginButton";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function SignIn() {
	const session = await getServerSession();

	if (session) {
		redirect("/");
	}

	return (
		<section>
			<LoginButton providerName="google" />
			<LoginButton providerName="github" />
		</section>
	);
}
