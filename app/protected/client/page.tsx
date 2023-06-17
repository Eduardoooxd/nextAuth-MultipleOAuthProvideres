"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProtectedClientPage() {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect("/signIn?callbackUrl=/protected/client");
		},
	});

	console.log(session, status);

	return (
		<section>
			<h1>Protected Page on Client</h1>
		</section>
	);
}
