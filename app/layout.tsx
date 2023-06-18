import { Provider } from "@/components/provider";
import "./globals.css";

export const metadata = {
	title: "Testing Next Auth",
	description: "Created by Eduardo Couto",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-[100dvh] scroll-smooth antialiased">
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
