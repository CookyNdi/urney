import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/navbar";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <main>
        <Sidebar />
        <section>
          <Header />
          <Navbar />
          {children}
        </section>
      </main>
    </body>
  </html>
);

export default RootLayout;
