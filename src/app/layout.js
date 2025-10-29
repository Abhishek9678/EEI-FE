// Root layout

import { Geist } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "../context/ThemeProvider";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Career | Tingg",
  description: "My career website",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${roboto.variable}`}>
      <body>
        <ThemeProviderWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}