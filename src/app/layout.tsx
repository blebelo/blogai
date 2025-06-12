import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@/providers/authProvider";

export const metadata: Metadata = {
  title: "Blog AI",
  description: "Intuitive AI Blogging",
};

export default function RootLayout({children} :Readonly<{children: React.ReactNode}>) {
  return (
      <UserProvider>
        <html lang="en">
          <body >
            {children}
          </body>
        </html>
      </UserProvider>


  );
}
