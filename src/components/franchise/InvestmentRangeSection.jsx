"use client";
import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const TOKENS = {
  bgDark: "#0B1220",
  cardBg: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.15)",
  lime: "#CBEF63",
  textLight: "#FFFFFF",
  textSub: "rgba(255,255,255,0.7)",
};

function RangeCard({ title, value }) {
  return (
    <Box
      sx={{
        bgcolor: TOKENS.cardBg,
        border: `1px solid ${TOKENS.border}`,
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        textAlign: "center",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        },
      }}
    >
      <Typography
        sx={{
          color: TOKENS.textLight,
          fontWeight: 600,
          fontSize: 16,
          mb: 1.25,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: TOKENS.lime,
          fontWeight: 900,
          fontSize: 28,
          letterSpacing: 0.2,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default function InvestmentRangeSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: TOKENS.bgDark,
        py: { xs: 6, md: 6},
        borderRadius: { xs: 0, md: 5 },
        mt: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="md">
        {/* Heading */}
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: { xs: 26, md: 34 },
            color: TOKENS.textLight,
            mb: { xs: 4, md: 6 },
          }}
        >
          Investment Range by Model
        </Typography>

        {/* Cards */}
        <Grid
          container
          spacing={{ xs: 2.5, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} md={4}>
            <RangeCard title="Micro Hub" value="₹15–25L" />
          </Grid>

          <Grid item xs={12} md={4}>
            <RangeCard title="City Hub" value="₹40–70L" />
          </Grid>

          <Grid item xs={12} md={4}>
            <RangeCard title="Regional Partner" value="₹1–2Cr+" />
          </Grid>
        </Grid>

        {/* Subtitle */}
        <Typography
          sx={{
            textAlign: "center",
            color: TOKENS.textSub,
            mt: { xs: 4, md: 5 },
            fontSize: 14.5,
          }}
        >
          Final investment depends on location, fleet size, and infrastructure
          requirements
        </Typography>
      </Container>
    </Box>
  );
}
