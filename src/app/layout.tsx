import type { Metadata } from "next";
import "./globals.css";
import "inter-ui/inter.css";

export const metadata: Metadata = {
  title: "gacha tools"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-base text-text">{children}</body>
    </html>
  );
}
