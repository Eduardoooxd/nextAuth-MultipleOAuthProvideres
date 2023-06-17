import { LoginButton, LogoutButton, ProfileButton } from "@/components/buttons";
import { getServerSession } from "next-auth";

export default async function Home() {
	const session = await getServerSession();

	return (
		<main className="flex flex-row gap-x-8">
			<LoginButton />
			<LogoutButton />
			<ProfileButton />
		</main>
	);
}
