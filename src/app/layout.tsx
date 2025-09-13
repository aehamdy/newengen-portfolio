import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandSvg from "@/components/BrandSvg";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency That Drives Real Impact | New Engen",
  description: "Digital Marketing Ageny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-content-light bg-surface-primary ${figtree.variable} relative antialiased`}
      >
        <Header />

        {children}

        <BrandSvg />
        <Footer />
      </body>
    </html>
  );
}
