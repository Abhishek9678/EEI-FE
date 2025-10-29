"use client";
import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const TOKENS = {
  pageBg: "#FFFFFF",
  panelBg: "#FFFFFF",
  panelBorder: "#E6EDE3",
  surface: "#FFFFFF",
  cardBorder: "#E6EDE3",
  textMain: "#0F172A",
  textSub: "rgba(0,0,0,0.62)",
  lime: "#CAE28E",
  limeText: "#FFFFFF",
  shadow: "0 10px 24px rgba(0,0,0,0.06)",
};

function StepCard({ step, title, desc }) {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: TOKENS.surface,
        border: `1px solid ${TOKENS.cardBorder}`,
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        pt: { xs: 6.5, md: 7.5 }, // room for the badge inside the card
        textAlign: "center",
        height: "100%",
        boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
        transition: "transform .2s ease",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      {/* Lime number badge (sits INSIDE the card, centered) */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          width: 56,
          height: 56,
          borderRadius: "50%",
          bgcolor: TOKENS.lime,
          display: "grid",
          placeItems: "center",
          boxShadow: "0 6px 16px rgba(202,226,142,0.45)",
        }}
      >
        <Typography sx={{ color: TOKENS.limeText, fontWeight: 900, fontSize: 18 }}>
          {step}
        </Typography>
      </Box>
       <Box sx={{mt:2}}>
      <Typography
        sx={{
          fontWeight: 800,
          color: TOKENS.textMain,
          fontSize: 18,
          lineHeight: 1.3,
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography sx={{ color: TOKENS.textSub, fontSize: 14.5, lineHeight: 1.7 }}>
        {desc}
      </Typography>
      </Box>
    </Box>
  );
}

export default function HowInvestmentWorks() {
  return (
    <Box component="section" sx={{ bgcolor: TOKENS.pageBg, py: { xs: 6, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Heading */}

        {/* Big rounded panel (like Figma) */}
        <Box
          sx={{
            bgcolor: TOKENS.panelBg,
            border: `1px solid ${TOKENS.panelBorder}`,
            borderRadius: 4,
            boxShadow: TOKENS.shadow,
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 6 },
          }}
        >
                <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: { xs: 28, md: 36 },
            lineHeight: 1.15,
            color: TOKENS.textMain,
            mb: 3,
          }}
        >
          How Investment with EEI Works
        </Typography>
          <Grid container spacing={{ xs: 2.5, md: 3.5 }}>
            <Grid item xs={12} md={4}>
              <StepCard
                step="1"
                title="Connect With Us"
                desc="Submit your inquiry and receive our comprehensive investor deck with detailed financials and growth projections."
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <StepCard
                step="2"
                title="Review Our Growth Model"
                desc="Analyze our business traction, asset portfolio, operational efficiency, and projected returns on investment."
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <StepCard
                step="3"
                title="Partner & Scale"
                desc="Become part of India’s leading green logistics revolution and scale with us across the nation."
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
