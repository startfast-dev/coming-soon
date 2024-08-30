import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

import Head from "next/head";

const inter = Inter({
  weight: ["100", "200", "300", "600", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "StartFast",
  description: "StartFast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} bg-gray-200	min-h-screen dark:bg-[#0d1117] `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <main className="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
