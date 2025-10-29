"use client";
import * as React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

const TOKENS = {
  ink: "#0F172A",
  text: "rgba(0,0,0,0.62)",
  subtext: "rgba(0,0,0,0.55)",
  border: "#E7EFE2",
  surface: "#FFFFFF",
  bg: "#FFFF",
  iconBg: "#EAF5CD",
  lime: "#A8D742",
};

function MetricCard({ iconSrc, metric, label, caption }) {
  return (
    <Box
      sx={{
        bgcolor: TOKENS.surface,
        border: `1px solid ${TOKENS.border}`,
        borderRadius: 4,
        p: { xs: 3, md: 4 },
        height: "100%",
        boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
        transition: "transform .2s ease",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      {/* icon tile */}
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: 2,
          bgcolor: TOKENS.iconBg,
          display: "grid",
          placeItems: "center",
          mb: 2,
        }}
      >
        {/* use your PNGs from /public */}
        <Image
          src={iconSrc}
          alt=""
          width={56}
          height={56}
          style={{ display: "block", objectFit: "contain" }}
        />
      </Box>

      {/* metric in lime, like Figma */}
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: 26, md: 30 },
          color: TOKENS.lime,
          lineHeight: 1.1,
        }}
      >
        {metric}
      </Typography>

      <Divider sx={{ my: 1.25, borderColor: TOKENS.border }} />

      {/* label + caption */}
      <Typography
        sx={{ fontWeight: 800, color: TOKENS.ink, fontSize: 18, lineHeight: 1.25 }}
      >
        {label}
      </Typography>
      <Typography sx={{ mt: 1, color: TOKENS.subtext, fontSize: 14.5 }}>
        {caption}
      </Typography>
    </Box>
  );
}

export default function InvestEEI() {
  return (
    <Box component="section" sx={{ bgcolor: TOKENS.bg, py: { xs: 6, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: { xs: 30, md: 40 },
            lineHeight: 1.15,
            color: TOKENS.ink,
          }}
        >
          Why Invest in EEI?
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            textAlign: "center",
            color: TOKENS.text,
            mt: 1.5,
            maxWidth: 900,
            mx: "auto",
            fontSize: 16,
            lineHeight: 1.6,
            fontFamily:"Space Grotesk"
          }}
        >
          EEI Services is redefining logistics through electric mobility and technology. As
          India accelerates toward sustainable commerce, we offer investors a chance to
          back a fast-growing EV ecosystem delivering both profitability and environmental
          impact.
        </Typography>

        {/* Cards */}
        <Grid container spacing={{ xs: 2.5, md: 4 }} sx={{ mt: { xs: 4, md: 6 } }}>
          <Grid item xs={12} md={4}>
            <MetricCard
              iconSrc="/Background.png"
              metric="Active EVs"
              label="Active EVs"
              caption="In operation across major cities"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <MetricCard
              iconSrc="/Background (1).png"
              metric="3.5M+"
              label="Deliveries"
              caption="Executed sustainably"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <MetricCard
              iconSrc="/Background (2).png"
              metric="10+"
              label="City Hubs"
              caption="Scaling pan-India"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
