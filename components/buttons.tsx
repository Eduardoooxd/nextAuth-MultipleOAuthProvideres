"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
	return (
		<button
			className="px-4 py-2 border rounded-md"
			onClick={() => signIn()}>
			Sign in
		</button>
	);
};

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
