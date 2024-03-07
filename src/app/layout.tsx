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
      <body className="bg-periwinkle-900 text-slate-100">{children}</body>
    </html>
  );
}
