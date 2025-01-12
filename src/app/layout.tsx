import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopHeader from "./Component/TopHeader";
import MiddleHeader from "./Component/MiddleHeader";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by Neha Arshad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
				<TopHeader />
				<MiddleHeader />
				<Navbar />
        {children}
				<Footer />
      </body>
    </html>
  );
}
