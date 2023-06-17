"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

export const LogoutButton = () => {
	return (
		<button
			className="px-4 py-2 border rounded-md"
			onClick={() => signOut()}>
			Sign Out
		</button>
	);
};

export const ProfileButton = () => {
	return (
		<Link className="underline" href="/profile">
			Profile
		</Link>
	);
};
