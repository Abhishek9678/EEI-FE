"use client";
import * as React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography, Divider, Link as MLink } from "@mui/material";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";

const TOKENS = {
  ink: "#0F172A",
  text: "rgba(0,0,0,0.62)",
  subtext: "rgba(0,0,0,0.55)",
  border: "#E7EFE2",
  surface: "#FFFFFF",
  bg: "#F5FBF7",
  iconBg: "#EAF5CD",
  lime: "#A8D742",
  link: "#8DBB20",
};

function OpportunityCard({ iconSrc, title, desc }) {
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
      {/* Icon */}
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
        <Image
          src={iconSrc}
          alt=""
          width={56}
          height={56}
          style={{ display: "block", objectFit: "contain" }}
        />
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: 22, md: 24 },
          color: TOKENS.lime,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>

      <Divider sx={{ my: 1.5, borderColor: TOKENS.border }} />

      {/* Description */}
      <Typography
        sx={{
          color: TOKENS.text,
          fontSize: 15,
          lineHeight: 1.65,
          mb: 3,
        }}
      >
        {desc}
      </Typography>

      {/* Learn More link */}
      <MLink
        href="#"
        underline="none"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.75,
          fontWeight: 700,
          fontSize: 15,
          color: TOKENS.link,
          "&:hover": { color: TOKENS.ink },
        }}
      >
        Learn More
        <ArrowOutwardRounded sx={{ fontSize: 18 }} />
      </MLink>
    </Box>
  );
}

export default function InvestmentOpportunities() {
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
            lineHeight: 1.15,
            color: TOKENS.ink,
          }}
        >
          Investment Opportunities
        </Typography>

        {/* Cards */}
        <Grid container spacing={{ xs: 2.5, md: 4 }} sx={{ mt: { xs: 4, md: 6 } }}>
          <Grid item xs={12} md={4}>
            <OpportunityCard
              iconSrc="/Background.png"
              title="Equity Investment"
              desc="Stake in company’s growth and valuation. Ideal for VCs, Angel Investors, and Impact Funds seeking long-term value creation."
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <OpportunityCard
              iconSrc="/Background (1).png"
              title="Asset Financing"
              desc="Finance EV fleets and earn fixed monthly returns. Backed by operations, insurance, and proven revenue streams."
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <OpportunityCard
              iconSrc="/Background (2).png"
              title="Strategic Partnerships"
              desc="Co-develop new hubs or service verticals. Collaborative long-term engagement for mutual growth."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
