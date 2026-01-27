import Navbar from "@/components/navbar";

import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ScrollProgress from "@/components/scroll-progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MOBICOP-X",
  description: "Traffic Management and Security Surveillance Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-zinc-900 dark:text-zinc-400 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
            <Footer />
          </ActiveSectionContextProvider>

          <ScrollProgress />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
