// Root layout

import { Space_Grotesk, DM_Sans } from 'next/font/google';

// import "./../../globals.css";
// import ThemeProviderWrapper from "../context/ThemeProvider";
// import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata = {
  title: "EEI Services",
  description: "My EEI website",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>
    HIIII
      </body>
    </html>
  );
}