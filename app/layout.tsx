import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multi Step Form",
  description: "This is a simple multi step form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu} antialiased text-base bg-magnolia h-screen w-full flex flex-col md:items-center md:justify-center`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
