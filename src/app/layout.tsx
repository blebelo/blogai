import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog AI",
  description: "Intuitive AI Blogging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
