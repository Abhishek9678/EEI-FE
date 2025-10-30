"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const TOKENS = {
  ink: "#0B0B0B",
  textMuted: "rgba(0,0,0,0.62)",
};

function IconPill({ src, alt, size = 70 }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: size, // keep consistent height with image size
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        mx: 0.5, // small horizontal spacing
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ display: "block" }}
        priority={false}
      />
    </Box>
  );
}

export default function LiumGoWork() {
  return (
    <Box
      component="section"
      id="platform-intro"
      sx={{
        bgcolor: "#FFFFFF",
        py: { xs: 7, md: 10 },
      }}
    >
      {/* Headline */}
      <Box sx={{ px: { xs: 2, md: 8 } }}>
        <Typography
          component="h2"
          sx={{
            color: TOKENS.ink,
            fontWeight: 700,
            lineHeight: 1.15,
            fontSize: { xs: 24, sm: 32, md: 44, lg: 52 },
            letterSpacing: -3.3,
            textAlign: "left",   // <-- forces left alignment
            maxWidth: 1100,
          }}
        >
          <Box component="span" sx={{ fontWeight: 900 }}>
            LIUM GO
          </Box>{" "}
          from EEI Services connects{" "}
          {/* <IconPill src="/Home1-textwithimg-1.png" alt="vehicles icon" size={70} /> */}
          vehicles, manpower and charging{" "}
          {/* <IconPill src="/Home1-textwithimg-2.png" alt="charging icon" size={70} /> */}
          so you can run profitable operations. Scale fast, operate smart.
        </Typography>
      </Box>
    </Box>
  );
}
