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
  Chip,
  Divider,
} from "@mui/material";

const TOKENS = {
  bg: "#FFFFFF",
  card: "#FFFFFF",
  border: "#E8EEE6",
  text: "#0B0B0B",
  sub: "rgba(0,0,0,0.62)",
  lime: "#CAE28E",
  limeHover: "#B8D778",
  mint: "#F1F8EF",
  mintBorder: "#DDEDD4",
  warn: "#FFF7D8",
  warnBorder: "#F3E7B0",
  tier1: "#CFEFC1",
  tier2: "#FFE38C",
  tier3: "#E3E7EE",
  tier1Text: "#3C6E1D",
  tier2Text: "#8A6A00",
  tier3Text: "#3C4654",
};

/* ---------- Small helpers ---------- */

function TierChip({ tier }) {
  const map = {
    "Tier 1": { bg: TOKENS.tier1, color: TOKENS.tier1Text },
    "Tier 2": { bg: TOKENS.tier2, color: TOKENS.tier2Text },
    "Tier 3": { bg: TOKENS.tier3, color: TOKENS.tier3Text },
  };
  const { bg, color } = map[tier] || map["Tier 1"];
  return (
    <Chip
      label={tier}
      size="small"
      sx={{
        bgcolor: bg,
        color,
        fontWeight: 700,
        borderRadius: 2,
        "& .MuiChip-label": { px: 1, py: 0.25, fontSize: 12.5 },
      }}
    />
  );
}

function CityTile({ iconSrc, city, state, tier, tone = "mint" }) {
  const tones = {
    mint: { bg: TOKENS.mint, br: TOKENS.mintBorder },
    warn: { bg: TOKENS.warn, br: TOKENS.warnBorder },
    gray: { bg: "#F4F7FA", br: "#E7ECF2" },
  };
  const { bg, br } = tones[tone] || tones.mint;
  return (
    <Box
      sx={{
        bgcolor: bg,
        border: `1px solid ${br}`,
        borderRadius: 3,
        p: 2,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: 1,
           
            display: "grid",
            placeItems: "center",
            flexShrink: 0,
          }}
        >
          {/* Replace with your pin/location PNG */}
          <Image
            src={iconSrc}
            alt=""
            width={28}
            height={28}
            style={{ display: "block", objectFit: "contain" }}
          />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontWeight: 800, color: TOKENS.text, lineHeight: 1 }}>
            {city}
          </Typography>
          <Typography sx={{ color: TOKENS.sub, fontSize: 13.5, lineHeight: 1.2 }}>
            {state}
          </Typography>
        </Box>
        <TierChip tier={tier} />
      </Stack>
    </Box>
  );
}

/* ---------- Main section ---------- */

export default function ExpansionLocations() {
  /* You can fetch these from your API; hardcoded to match the mock */
  const cities = [
    { city: "Delhi NCR", state: "Delhi/Haryana/UP", tier: "Tier 1", tone: "mint" },
    { city: "Bangalore", state: "Karnataka", tier: "Tier 1", tone: "mint" },
    { city: "Hyderabad", state: "Telangana", tier: "Tier 1", tone: "mint" },
    { city: "Pune", state: "Maharashtra", tier: "Tier 1", tone: "mint" },
    { city: "Jaipur", state: "Rajasthan", tier: "Tier 2", tone: "mint" },
    { city: "Lucknow", state: "Uttar Pradesh", tier: "Tier 2", tone: "mint" },
    { city: "Chandigarh", state: "Punjab/Haryana", tier: "Tier 2", tone: "mint" },
    { city: "Ahmedabad", state: "Gujarat", tier: "Tier 1", tone: "warn" },
    { city: "Indore", state: "Madhya Pradesh", tier: "Tier 2", tone: "warn" },
    { city: "Tier 3 Cities", state: "Multiple States", tier: "Tier 3", tone: "gray" },
  ];

  return (
    <Box component="section" sx={{ bgcolor: TOKENS.bg, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: { xs: 30, md: 40 },
            color: TOKENS.text,
            lineHeight: 1.15,
          }}
        >
          Expansion Locations
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
          Pan-India presence with strategic expansion across tier 1, 2 & 3 cities
        </Typography>

        {/* Top row: Map card + stats/cta column */}
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {/* Map card */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                bgcolor: TOKENS.card,
                border: `1px solid ${TOKENS.border}`,
                borderRadius: 4,
                p: 2,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  height: { xs: 260, md: 380 },
                }}
              >
                {/* Replace with your banner map image */}
                <Image
                  src="/expansion.jpg"
                  alt="Expansion map"
                  fill
                  style={{ objectFit: "cover", color:"#F1F5F9" }}
                  priority={false}
                />

                {/* Faded overlay for the left style */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(255,255,255,0.25)",
                  }}
                />

                {/* Center pin + text */}
                <Stack
                  spacing={1}
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      
                      display: "grid",
                      placeItems: "center",
                     
                    }}
                  >
                    {/* Replace with your lime map-pin PNG */}
                    <Image src="/SVG (1).png" alt="" width={56} height={56} />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: 20,
                      color: TOKENS.text,
                      textAlign: "center",
                      lineHeight: 1,
                    }}
                  >
                    15+ Cities
                  </Typography>
                  <Typography sx={{ color: TOKENS.sub, fontSize: 14.5 }}>
                    Active & Expanding
                  </Typography>
                </Stack>
              </Box>
                   <Box sx={{ mt: { xs: 4, md: 5 } }}>
          <Grid container spacing={2}>
            {cities.map((c, i) => (
                
              <Grid item xs={12} md={6} key={i}>
                <CityTile
                  iconSrc="/SVG (1).png"   // replace with your small pin PNG
                  city={c.city}
                  state={c.state}
                  tier={c.tier}
                  tone={c.tone}
                />
                <Grid item xs={12} md={6} key={i}>
                    </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
            </Box>
          </Grid>

          {/* Right column: stats + CTA */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2.5} sx={{ height: "100%" }}>
              {/* Stats card */}
              <Box
                sx={{
                  bgcolor: TOKENS.card,
                  border: `1px solid ${TOKENS.border}`,
                  borderRadius: 4,
                  p: { xs: 2.5, md: 3 },
                }}
              >
                <Typography
                  sx={{ fontWeight: 800, color: TOKENS.text, mb: 1.5 }}
                >
                  Expansion Stats
                </Typography>

                <Stack spacing={1.25}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography sx={{ color: TOKENS.sub, fontSize: 15 }}>
                      Active Cities
                    </Typography>
                    <Typography sx={{ fontWeight: 900, color: "#6FB52A" }}>
                      7
                    </Typography>
                  </Stack>
                  <Divider sx={{ borderColor: TOKENS.border }} />
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography sx={{ color: TOKENS.sub, fontSize: 15 }}>
                      Launching Soon
                    </Typography>
                    <Typography sx={{ fontWeight: 900, color: "#E2A100" }}>
                      2
                    </Typography>
                  </Stack>
                  <Divider sx={{ borderColor: TOKENS.border }} />
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography sx={{ color: TOKENS.sub, fontSize: 15 }}>
                      Total Franchises
                    </Typography>
                    <Typography sx={{ fontWeight: 900, color: TOKENS.text }}>
                      250+
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              {/* CTA card */}
              <Box
                sx={{
                  bgcolor: TOKENS.lime,
                  borderRadius: 4,
                  p: { xs: 2.5, md: 3 },
                  boxShadow: "0 14px 28px rgba(202,226,142,0.35)",
                }}
              >
                <Typography
                  sx={{ fontWeight: 900, color: TOKENS.text, mb: 1 }}
                >
                  City Not Listed?
                </Typography>
                <Typography sx={{ color: "#2E3A22", fontSize: 14.5, mb: 2 }}>
                  We’re constantly expanding. Tell us your preferred location and
                  we’ll activate it for you.
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    bgcolor: "#FFFFFF",
                    color: "#243017",
                    fontWeight: 800,
                    py: 1.1,
                    "&:hover": { bgcolor: "#F4F7F0" },
                  }}
                >
                  Request New City
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* City grid list */}
   
      </Container>
    </Box>
  );
}
