"use client";
import * as React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import LocalShippingRounded from "@mui/icons-material/LocalShippingRounded";
import PlaceRounded from "@mui/icons-material/PlaceRounded";
import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";

const TOKENS = {
  // background band (deep blue/green gradient)
  bandStart: "#0E1B2A",
  bandEnd: "#0A1220",
  cardBg: "rgba(13, 28, 43, 0.72)",
  cardBorder: "rgba(86, 212, 155, 0.35)", // teal-lime glow
  cardInner: "rgba(0,0,0,0.20)",
  heading: "#EAF7F2",
  sub: "rgba(226, 241, 236, 0.75)",
  lime: "#B4F28A",
  limeSoft: "#8CE36A",
  iconTile: "rgba(120, 214, 151, 0.18)",
};

function IconTile({ iconSrc, fallback }) {
  return (
    <Box
      sx={{
        width: 56,
        height: 56,
        borderRadius: 2,
        bgcolor: TOKENS.iconTile,
        display: "grid",
        placeItems: "center",
        border: "1px solid rgba(131, 243, 171, 0.25)",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2)",
      }}
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt=""
          width={28}
          height={28}
          style={{ display: "block", objectFit: "contain" }}
        />
      ) : (
        fallback
      )}
    </Box>
  );
}

function StatCard({ iconSrc, fallbackIcon, number, label, caption }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: 3,
        p: { xs: 3, md: 3.5 },
        bgcolor: TOKENS.cardBg,
        // subtle neon border + inner shadow like Figma
        border: `1px solid ${TOKENS.cardBorder}`,
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.4) inset, 0 10px 28px rgba(2, 14, 26, 0.6)",
        backdropFilter: "blur(2px)",
      }}
    >
      <Stack spacing={2}>
        <IconTile iconSrc={iconSrc} fallback={fallbackIcon} />

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
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: 18,
              color: "#E7FFE9",
            }}
          >
            {label}
          </Typography>
          {caption ? (
            <Typography
              sx={{
                mt: 0.5,
                fontSize: 14,
                color: TOKENS.sub,
              }}
            >
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
        py: { xs: 8, md: 12 },
        background: `radial-gradient(1200px 600px at 50% -10%, #163346 0%, transparent 60%), linear-gradient(180deg, ${TOKENS.bandStart} 0%, ${TOKENS.bandEnd} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        {/* Heading + sub */}
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

        {/* Cards */}
        <Grid container spacing={{ xs: 2.5, md: 3.5 }}>
          <Grid item xs={12} md={3}>
            <StatCard
              // pass iconSrc="/your-truck.png" if you have PNGs; otherwise fallback icon will show
              number="320+"
              label="EVs Deployed"
              caption="Across 15+ cities"
              fallbackIcon={<LocalShippingRounded sx={{ color: TOKENS.limeSoft }} />}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              number="26M+"
              label="Km Delivered Monthly"
              caption="Green miles covered"
              fallbackIcon={<PlaceRounded sx={{ color: TOKENS.limeSoft }} />}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              number="25%"
              label="On-Time Fulfillment"
              caption="Industry-leading SLA"
              fallbackIcon={<AccessTimeRounded sx={{ color: TOKENS.limeSoft }} />}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              number="2%"
              label="Annual Revenue Uplift"
              caption="For franchise partners"
              fallbackIcon={<TrendingUpRounded sx={{ color: TOKENS.limeSoft }} />}
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
              py: 1.25,
              borderRadius: 2,
              fontWeight: 800,
              bgcolor: "rgba(255,255,255,0.12)",
              color: "#EAF7F2",
              backdropFilter: "blur(2px)",
              border: "1px solid rgba(255,255,255,0.18)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.18)",
              },
            }}
          >
            See Full Performance Deck
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
