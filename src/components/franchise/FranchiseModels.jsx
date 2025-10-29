"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Grid2,
  Typography,
  Chip,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";

const TOKENS = {
  bg: "#EEF6EA",          // section light tint (adjust if needed)
  surface: "#FFFFFF",
  border: "#E6EDE3",
  heading: "#0B0B0B",
  text: "rgba(0,0,0,0.64)",
  subtext: "rgba(0,0,0,0.62)",
  pill: "#D9F0B5",
  badgeText: "#3F6A0F",
  limeBtn: "#CAE28E",
  limeBtnHover: "#B8D778",
  dark: "#0E1726",        // for corner deco
};

function SpecRow({ label, value, strong }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 1.2 }}
    >
      <Typography sx={{ color: TOKENS.text, fontSize: 14.5 }}>{label}</Typography>
      <Typography
        sx={{
          fontWeight: strong ? 800 : 700,
          color: strong ? TOKENS.heading : TOKENS.heading,
          fontSize: 14.5,
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

function ModelCard({
  badge,
  iconSrc,
  title,
  subtitle,
  fleet,
  coverage,
  setup,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: TOKENS.surface,
        border: `1px solid ${TOKENS.border}`,
        borderRadius: 4, // ~16px
        boxShadow: "0 2px 0 rgba(0,0,0,0.03)",
        p: { xs: 2.5, md: 3 },
        pt: { xs: 3.5, md: 4 },
        overflow: "hidden",
        minHeight: 420,
        transition: "transform .2s ease, box-shadow .2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
        },
      }}
    >
      {/* top-right corner decorative quarter-circle */}
      <Box
        sx={{
          position: "absolute",
          top: -70,
          right: -70,
          width: 180,
          height: 180,
          bgcolor: TOKENS.dark,
          borderRadius: "50%",
          opacity: 0.96,
        }}
      />

      {/* badge */}
      <Chip
        label={badge}
        sx={{
          position: "absolute",
          top: 14,
          right: 14,
          bgcolor: TOKENS.pill,
          color: TOKENS.badgeText,
          fontWeight: 700,
          borderRadius: 999,
          "& .MuiChip-label": { px: 1.25, py: 0.25 },
        }}
      />

      {/* icon tile */}
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: 2,
          bgcolor: "#EAF5CD",
          display: "Grid2",
          placeItems: "center",
          mb: 2,
        }}
      >
        <Image
          src={iconSrc}
          alt={title}
          width={56}
          height={56}
          style={{ objectFit: "contain", display: "block" }}
        />
      </Box>

      {/* title + subtitle */}
      <Typography sx={{ fontWeight: 800, fontSize: 22, color: TOKENS.heading }}>
        {title}
      </Typography>
      <Typography sx={{ color: TOKENS.text, mt: 0.75, fontSize: 15 }}>
        {subtitle}
      </Typography>

      {/* specs */}
      <Box sx={{ mt: 2.5 }}>
        <SpecRow label="Fleet Size" value={fleet} strong />
        <Divider sx={{ borderColor: TOKENS.border }} />
        <SpecRow label="Coverage" value={coverage} />
        <Divider sx={{ borderColor: TOKENS.border }} />
        <SpecRow label="Setup" value={setup} />
      </Box>

      {/* actions */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ mt: 2.5 }}
        alignItems="center"
      >
        <Button
          component={Link}
          href="#"
          variant="outlined"
          endIcon={<KeyboardArrowDownRounded />}
          sx={{
            borderColor: TOKENS.border,
            color: TOKENS.heading,
            bgcolor: "#F6F9F3",
            fontWeight: 700,
            borderRadius: 2,
            px: 1.75,
            "&:hover": { borderColor: TOKENS.border, bgcolor: "#EEF4E8" },
          }}
        >
          View Details
        </Button>

        <Button
          component={Link}
          href="#"
          variant="contained"
          endIcon={
            <Box
              sx={{
                bgcolor: "#0B0B0B",
                color: "#fff",
                width: 26,
                height: 26,
                borderRadius: "50%",
                display: "Grid2",
                placeItems: "center",
                ml: 0.5,
              }}
            >
              <NorthEastRounded fontSize="small" />
            </Box>
          }
          sx={{
            bgcolor: TOKENS.limeBtn,
            color: "#0B0B0B",
            fontWeight: 800,
            borderRadius: 2,
            px: 1.75,
            "&:hover": { bgcolor: TOKENS.limeBtnHover },
          }}
        >
          Apply Now
        </Button>
      </Stack>
    </Box>
  );
}

export default function FranchiseModels() {
  return (
    <Box component="section" sx={{ bgcolor: TOKENS.bg, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            color: TOKENS.heading,
            fontWeight: 900,
            fontSize: { xs: 30, md: 40 },
            lineHeight: 1.15,
          }}
        >
          Franchise Models
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: TOKENS.text,
            mt: 1,
            mb: { xs: 4, md: 6 },
            maxWidth: 820,
            mx: "auto",
            fontSize: 16,
          }}
        >
          Choose the model that fits your vision and investment capacity
        </Typography>

        <Grid2 container spacing={{ xs: 2.5, md: 4 }}>
          <Grid2 item size={4}>
            <ModelCard
              badge="First-time entrepreneurs"
              iconSrc="/Background (4).png" // building icon
              title="Micro Hub Franchise"
              subtitle="Perfect for first-time entrepreneurs"
              fleet="10–20 EVs"
              coverage="5–8 km radius (local cluster)"
              setup="Small hub / parking space"
            />
          </Grid2>

          <Grid2 item size={4}>
            <ModelCard
              badge="Experienced operators"
              iconSrc="/Background (3).png" // city icon
              title="City Hub Franchise"
              subtitle="Scale across metro neighborhoods"
              fleet="30–50 EVs"
              coverage="Large metro neighbourhood / city clusters"
              setup="Hub + rider recruitment support"
            />
          </Grid2>

          <Grid2 item size={4}>
            <ModelCard
              badge="Logistics veterans & investors"
              iconSrc="/Background (5).png" // globe icon
              title="Regional / Territory Partner"
              subtitle="Exclusive multi-district operations"
              fleet="75+ EVs"
              coverage="Multiple districts / citywide"
              setup="Full ops infrastructure"
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
