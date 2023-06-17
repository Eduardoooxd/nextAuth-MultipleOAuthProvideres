"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

interface LoginButtonProps {
	providerName: string;
}

export const LoginButton = ({ providerName }: LoginButtonProps) => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") ?? "";

	return (
		<button
			className="px-4 py-2 border rounded-md"
			onClick={() => signIn(providerName, { callbackUrl })}>
			Sign in {providerName}
		</button>
	);
};
