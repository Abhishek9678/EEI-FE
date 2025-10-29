"use client";
import * as React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";

const TOKENS = {
  // band
  bandStart: "#0E1B2A",
  bandEnd: "#0A1220",
  // cards
  cardBg: "rgba(15, 30, 48, 0.72)",
  cardBorder: "rgba(120, 214, 151, 0.35)",
  iconTile: "rgba(120, 214, 151, 0.18)",
  // text
  heading: "#EAF7F2",
  sub: "rgba(226, 241, 236, 0.78)",
  lime: "#B4F28A",
  label: "#E7FFE9",
};

function IconTile({ src }) {
  return (
    <Box
      sx={{
        width: 56,
        height: 56,
        borderRadius: 2,
        bgcolor: TOKENS.iconTile,
        display: "grid",
        placeItems: "center",
        border: "1px solid rgba(131,243,171,0.25)",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.18)",
      }}
    >
      <Image
        src={src}
        alt=""
        width={28}
        height={28}
        style={{ display: "block", objectFit: "contain" }}
      />
    </Box>
  );
}

function StatCard({ iconSrc, number, label, caption }) {
  return (
    <Box
      sx={{
        height: "100%",
        borderRadius: 3,
        p: { xs: 3, md: 3.5 },
        bgcolor: TOKENS.cardBg,
        border: `1px solid ${TOKENS.cardBorder}`,
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.45) inset, 0 12px 30px rgba(2,14,26,0.6)",
        backdropFilter: "blur(2px)",
      }}
    >
      <Stack spacing={2}>
        <IconTile src={iconSrc} />

        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: 36, md: 44 },
            lineHeight: 1,
            letterSpacing: 0.2,
            color: TOKENS.lime,
          }}
        >
          {number}
        </Typography>

        <Box>
          <Typography sx={{ fontWeight: 800, fontSize: 18, color: TOKENS.label }}>
            {label}
          </Typography>
          {caption ? (
            <Typography sx={{ mt: 0.5, fontSize: 14, color: TOKENS.sub }}>
              {caption}
            </Typography>
          ) : null}
        </Box>
      </Stack>
    </Box>
  );
}

export default function ByTheNumbers() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 6 },
        background: `radial-gradient(1200px 600px at 50% -10%, #163346 0%, transparent 60%), linear-gradient(180deg, ${TOKENS.bandStart} 0%, ${TOKENS.bandEnd} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: { xs: 30, md: 40 },
            lineHeight: 1.15,
            color: TOKENS.heading,
          }}
        >
          By The Numbers
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: TOKENS.sub,
            mt: 1,
            mb: { xs: 4, md: 6 },
            fontSize: 16,
          }}
        >
          Proven performance and scale across India’s leading EV logistics network
        </Typography>

        {/* Stats */}
        <Grid container spacing={{ xs: 2.5, md: 3.5 }}>
          <Grid item xs={12} md={3}>
            <StatCard
              iconSrc="/icons/rupee-box.png"      // replace with your PNG
              number="₹50Cr+"
              label="Asset Base"
              caption="Growing portfolio"
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              iconSrc="/icons/pin-box.png"
              number="10+"
              label="City Operations"
              caption="Pan-India presence"
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              iconSrc="/icons/clock-box.png"
              number="95%"
              label="Uptime Efficiency"
              caption="Reliable operations"
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              iconSrc="/icons/arrow-up-box.png"
              number="1,200+"
              label="Fleet Deployed"
              caption="Active vehicles"
            />
          </Grid>
        </Grid>

        {/* CTA */}
        <Box sx={{ textAlign: "center", mt: { xs: 5, md: 6 } }}>
          <Button
            variant="contained"
            endIcon={<NorthEastRounded />}
            sx={{
              px: 3,
              py: 1.2,
              borderRadius: 2,
              fontWeight: 800,
              bgcolor: "rgba(255,255,255,0.12)",
              color: TOKENS.heading,
              backdropFilter: "blur(2px)",
              border: "1px solid rgba(255,255,255,0.18)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
            }}
          >
            Apply to Invest
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
