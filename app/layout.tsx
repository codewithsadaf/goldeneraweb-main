import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "../public/css/foundation/foundation.min.css";
import "../public/css/foundation/normalize.css";
import "../public/css/functions.css";
import "../public/css/circle.css";
import "../public/css/main.css";

import Footer from "./partials/footer";
import Header from "./partials/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Era Insurance",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />

      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />

      </body>
    </html>
  );
}
