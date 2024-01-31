import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego García Obando - Dev",
  description: "Diseñador y Desarrollador de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative antialiased bg-[#F6F5FF]", inter.className)}
      >
        <main className="relative flex flex-col w-full min-h-screen">
          <Navbar />
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
