import "./globals.css";
import { Inter } from "next/font/google";

// components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Blog App",
  description: "Fullstack Next Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`inter.className bg-purple-800 max-w-[1366px] min-h-screen mx-auto px-[60px] flex flex-col justify-between`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
