// Root layout (App Router, JS)
import "/globals.css";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import ThemeProvider from "../components/ThemeProvider";

// Fonts (display: swap for CLS safety)
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "EEI Services",
  description: "EV subleasing, riders & infra at scale.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
