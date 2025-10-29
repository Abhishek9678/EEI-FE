"use client";
import * as React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const EEI = {
  colors: {
    // bg: "#0E0E0E",
    textPrimary: "#F3F4F6",
    textSecondary: "#D1D5DB",
    lime: "#C9F269",
    limeHover: "#B8E454",
    border: "rgba(255,255,255,0.14)",
  },
};

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: EEI.colors.bg, paper: EEI.colors.bg },
    text: { primary: EEI.colors.textPrimary, secondary: EEI.colors.textSecondary },
    primary: { main: EEI.colors.lime },
  },
  typography: {
    fontFamily: 'var(--font-dm-sans), "DM Sans", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      fontWeight: 800,
      letterSpacing: -0.4,
      lineHeight: 1.05,
      fontSize: "clamp(2.2rem, 3.4vw + 1rem, 4rem)",
    },
    h2: {
      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      fontWeight: 800,
      lineHeight: 1.08,
      fontSize: "clamp(1.6rem, 2.4vw + 1rem, 2.6rem)",
    },
    button: { textTransform: "none", fontWeight: 800 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, paddingInline: 18, paddingBlock: 10 },
        containedPrimary: { color: "#0b0b0b" },
      },
    },
  },
});

export default function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
