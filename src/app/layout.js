import "./globals.css";
import { Inter } from "next/font/google";

// components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Blog App",
  description: "Fullstack Next Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`inter.className `}>
        <ThemeProvider>
          <AuthProvider>
            {/* Container */}
            <div className="max-w-[1366px] min-h-screen mx-auto md:px-[60px] px-[40px] flex flex-col justify-between">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
