import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bertie the boat | june 16-17",
  description:
    "two separate bertie the boat event days on the spree: ai day on june 16 and protocol day on june 17.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
