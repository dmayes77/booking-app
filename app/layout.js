import Header from "@/components/Header/Header";
import Head from "next/head";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Site Title</title>
      </Head>
      <body
        className={`${inter.variable} flex h-full w-full flex-col bg-white`}
      >
        
        <main className="flex-w-full flex-grow">{children}</main>
        <footer className="bg-gray-100 py-4 text-center">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
