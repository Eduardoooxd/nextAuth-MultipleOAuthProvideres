import { options } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET() {
	const session = await getServerSession(options);
	return NextResponse.json(
		{
			message: "Hello World!",
			user: session?.user,
			authenticated: !!session,
		},
		{ status: 200 },
	);
}
