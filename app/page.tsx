import { LogoutButton, ProfileButton } from "@/components/buttons";
import { options } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

export default async function Home() {
	const session = await getServerSession(options);

	return (
		<main className="flex flex-col gap-x-8">
			{!session && <Link href="/signIn">Sign In Page</Link>}

			{session && <h1>Logged in</h1>}
			{session && <h1>{session.user?.name}</h1>}
			{session && <LogoutButton />}

			{session && <ProfileButton />}
		</main>
	);
}
