import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/page";
import Footer from "@/Components/Footer/page";
import AuthProvider from "@/AuthProvider/AuthProvider";
import BurgerProvider from "@/BurgerProvider/BurgerProvider";

const barlow = Barlow({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Pizza-Poka",
  description: "Pizza Poka Resturant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${barlow.className}`}>
        <AuthProvider>
          <BurgerProvider>
            <Header />
            {children}
            <Footer />
          </BurgerProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
