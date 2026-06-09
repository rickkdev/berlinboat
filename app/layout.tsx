import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berlin Boat | June 16-17",
  description:
    "Two separate Berlin boat event days on the Spree: AI Day on June 16 and Protocol Day on June 17.",
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
