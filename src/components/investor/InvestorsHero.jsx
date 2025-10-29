"use client";
import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import KeyboardArrowUpRounded from "@mui/icons-material/KeyboardArrowUpRounded";

const TOKENS = {
  lime: "#CAE28E",
  limeHover: "#B8E454",
  border: "rgba(255,255,255,0.14)",
};

export default function InvestorHero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        pt: { xs: 12, md: 14 },
        pb: { xs: 4, md: 6 },
        minHeight: { md: 640 },
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Background video */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -3,
          "& video": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }}
      >
        <video
          src="/invester-video.mp4"
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
        />
      </Box>

      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          background:
            "linear-gradient(0deg, rgba(22, 22, 22, 0.00) 0%, #161616 100%)",
        }}
      />

      <Container>
        {/* Center content */}
        <Box
          sx={{
            mx: "auto",
            textAlign: "center",
            maxWidth: 980,
            pl: { sm: 0, lg: 18 },
            
          }}
        >
          <Typography variant="h1" component="h1" sx={{ mt: { xs: 1, md: 3 }, fontFamily:"DM Sans" }}>
            Let’s Build the Future Of
          </Typography>
          <Typography variant="h1" sx={{ mt: 1,fontFamily:"DM Sans" }}>
             Green Logistics, Together
          </Typography>
          <Typography sx={{ mt: 2, fontFamily:"DM Sans" }} color="text.secondary">
            Share your details and our Investment Relations Team will connect
          </Typography>
          <Typography color="text.secondary">
           with you soon.
          </Typography>
           
        </Box>

        {/* ✅ Trusted by section (updated to match screenshot) */}
       

        {/* Scroll to top */}
        <Box
          sx={{
            position: "absolute",
            right: 20,
            bottom: 0,
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Button
            variant="contained"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              minWidth: 0,
              p: 1.25,
              borderRadius: 2,
              bgcolor: TOKENS.lime,
              "&:hover": { bgcolor: TOKENS.limeHover },
              color: "#0B0B0B",
            }}
          >
            <KeyboardArrowUpRounded />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
