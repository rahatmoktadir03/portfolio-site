import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import dynamic from "next/dynamic";
const ThemeProvider = dynamic(() => import("./provider").then(mod => mod.ThemeProvider), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahat's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/RM-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
