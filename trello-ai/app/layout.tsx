import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trello 2.0 clone",
  description: "Generated by EladDevServices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">{children}</body>
    </html>
  );
}
