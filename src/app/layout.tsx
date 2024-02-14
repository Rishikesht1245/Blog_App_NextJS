import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//find the src folder inside the components folder and Navbar
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BlogiFy Homepage",
    template: "%s | BlogiFy",
  },
  description: "The perfect app for blogging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
