import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/theme-switch";
import { Providers } from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego García - Design & Dev",
  description: "Software Developer & Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative antialiased bg-[#F6F5FF] dark:bg-[#19181B] overflow-x-hidden",
          inter.className
        )}
      >
        <Providers>
          <main className="relative flex flex-col w-full min-h-screen">
            <Navbar />
            <div className="flex-1">{children}</div>
          </main>
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}
