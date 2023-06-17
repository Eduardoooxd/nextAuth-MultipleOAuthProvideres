import { options } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function ProtectedClientPage() {
	const session = await getServerSession(options);

	if (!session) {
		redirect("/signIn?callbackUrl=/protected");
	}

	return (
		<section>
			<h1>Protected Page of server</h1>
		</section>
	);
}
