"use client";
import * as React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Grid2,
  Typography,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

const TOKENS = {
  bg: "#F7FBF5",
  surface: "#FFFFFF",
  border: "#E6EDE3",
  textMain: "#0B0B0B",
  textSub: "#475569",
  iconTile: "#EAF5CD",      // lime tile behind card icon
  chipBg: "#ECFDF5",        // small green tag bg
  chipText: "#CAE28E",
  hoverShadow: "0 12px 28px rgba(0,0,0,0.07)",
};

/** Small bullet row using your ✓ image */
function Bullet({ children }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Image src="tick.png" alt="" width={12} height={10} />
      <Typography sx={{ fontSize: 11, color: TOKENS.textSub, lineHeight: 1.55 }}>
        {children}
      </Typography>
    </Box>
  );
}

function StatsStrip() {
  const COLORS = {
    panelBg: "#FFFFFF",
    border: "#E6EDE3",
    number: "#CAE28E",         // lime figure color like Figma
    label: "#475569",
    shadow: "0 10px 24px rgba(0,0,0,0.06)",
  };

  return (
    <Box sx={{ mt: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          bgcolor: COLORS.panelBg,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 4,                    // ~16px
          boxShadow: COLORS.shadow,
          px: { xs: 2.5, md: 6 },
          py: { xs: 3, md: 4 },
        }}
      >
        <Grid2
          container
          spacing={{ xs: 3, md: 2 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* 4+ Revenue Streams */}
          <Grid2 size={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 26, md: 30 },
                  lineHeight: 1,
                  color: COLORS.number,
                  mb: 1,
                }}
              >
                4+
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: COLORS.label,
                }}
              >
                Revenue Streams
              </Typography>
            </Box>
          </Grid2>

          {/* 95% Client Retention */}
          <Grid2 size={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 28, md: 32 },
                  lineHeight: 1,
                  color: COLORS.number,
                  mb: 1,
                }}
              >
                95%
              </Typography>
              <Typography sx={{ fontSize: 15, color: COLORS.label }}>
                Client Retention
              </Typography>
            </Box>
          </Grid2>

          {/* 10% Annual Revenue Uplift */}
          <Grid2 size={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 28, md: 32 },
                  lineHeight: 1,
                  color: COLORS.number,
                  mb: 1,
                }}
              >
                10%
              </Typography>
              <Typography sx={{ fontSize: 15, color: COLORS.label }}>
                Annual Revenue Uplift
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

function ServiceCard({ iconSrc, title, subtitle, tag, bullets }) {
  return (
    <Box
      sx={{
        bgcolor: TOKENS.surface,
        border: `1px solid ${TOKENS.border}`,
        borderRadius: 4,                 // ~16px
        p: { xs: 3, md: 4 },
        height: "100%",
        transition: "transform .2s ease, box-shadow .2s ease",
        boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
        "&:hover": { transform: "translateY(-4px)", boxShadow: TOKENS.hoverShadow },
      }}
    >
      <Stack spacing={2}>
        {/* Icon tile (uses your PNG, not MUI icons) */}
        <Box
          sx={{
            width: 66,
            height: 66,
            borderRadius: 2,
            // bgcolor: TOKENS.iconTile,
            display: "Grid2",
            placeItems: "center",
          }}
        >
          <Image
            src={iconSrc}
            alt={title}
            width={66}
            height={66}
            style={{ objectFit: "contain", display: "block" }}
            priority={false}
          />
        </Box>

        {/* Title / subtitle */}
        <Box>
          <Typography
            sx={{ fontWeight: 700, fontSize: 18, color: TOKENS.textMain, lineHeight: 1.3 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ mt: 0.5, color: TOKENS.textSub, fontFamily: "Space Grotesk", fontSize: 12.8, lineHeight: 1.5 }}
          >
            {subtitle}
          </Typography>
        </Box>

        {/* Green tag chip (left-aligned like Figma) */}
        {tag ? (
          <Chip
            label={tag}
            size="small"
            sx={{
              alignSelf: "flex-start",
              bgcolor: TOKENS.chipBg,
              color: TOKENS.chipText,
              fontWeight: 700,
              borderRadius: 2,
              "& .MuiChip-label": { px: 1.25, py: 0.25, fontSize: 13 },
            }}
          />
        ) : null}

        <Divider sx={{ my: 2, borderColor: TOKENS.border }} />

        {/* Bullets with ✓ image */}
        <Stack spacing={1.1}>
          {bullets.map((b, i) => (
            <Bullet key={i}>{b}</Bullet>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default function CoreServicesRevenue() {
  return (
    <Box component="section" sx={{ bgcolor: TOKENS.bg, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: { xs: 32, md: 40 },
            lineHeight: 1.15,
            color: TOKENS.textMain,
          }}
        >
          Core Services & Revenue Streams
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            textAlign: "center",
            color: TOKENS.textSub,
            mt: 1.25,
            mb: { xs: 4, md: 6 },
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          Multiple revenue opportunities across all franchise models
        </Typography>

        {/* Cards */}
        <Grid2 container spacing={{ xs: 2.5, md: 4 }}>
          <Grid2 size={3}>
            <ServiceCard
              iconSrc="/Background+Shadow.png"        // wrench PNG
              title="Flexible EV Leasing"
              subtitle="Access to modern EV fleet with flexible terms"
              tag="All Models"
              bullets={[
                "No upfront vehicle cost",
                "Maintenance included",
                "Insurance coverage",
                "Flexible upgrade path",
              ]}
            />
          </Grid2>

          <Grid2 size={3}>
            <ServiceCard
              iconSrc="/Background+Shadow (1).png"        // document-check PNG
              title="Dispatch & Delivery"
              subtitle="End-to-end logistics operations"
              tag="Primary Revenue"
              bullets={[
                "Pre-allocated clients",
                "Route optimization",
                "Real-time tracking",
                "Quality SLAs",
              ]}
            />
          </Grid2>

          <Grid2 size={3}>
            <ServiceCard
              iconSrc="/Background+shadow (4).png"        // bar chart PNG
              title="EV Manpower"
              subtitle="Trained rider network and management"
              tag="All Models"
              bullets={[
                "Recruitment support",
                "Training programs",
                "Payroll management",
                "Performance tracking",
              ]}
            />
          </Grid2>

          <Grid2 size={3}>
            <ServiceCard
              iconSrc="/Background+Shadow (3).png"        // reuse doc-check for infra sharing (update if you have a 4th PNG)
              title="Infrastructure Sharing"
              subtitle="Hub and charging network access"
              tag="City & Regional"
              bullets={[
                "Charging network",
                "Hub optimization",
                "Shared resources",
                "Cost efficiency",
              ]}
            />
          </Grid2>
        </Grid2>
        <StatsStrip />
      </Container>
      
    </Box>
  );
}
