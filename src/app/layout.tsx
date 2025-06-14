import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/page";
import Footer from "@/Components/Footer/page";
import AuthProvider from "@/AuthProvider/AuthProvider";
import BurgerProvider from "@/BurgerProvider/BurgerProvider";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/QueryProvider/QueryProvider";
import ReduxProvider from "@/ReduxProvider/ReduxProvider";

const barlow = Barlow({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Burger-Poka",
  description: "Burger Poka Resturant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${barlow.className}`}>
        <ReduxProvider>
          <AuthProvider>
            <QueryProvider>
              <BurgerProvider>
                <Header />
                {children}
                <Footer />
                <Toaster />
              </BurgerProvider>
            </QueryProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
