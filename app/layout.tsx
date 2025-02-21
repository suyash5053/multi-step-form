import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  preload: false,
}) 

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
        className={`${ubuntu} antialiased text-base bg-magnolia h-screen w-screen flex flex-col items-center justify-center`}
      >
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
}
