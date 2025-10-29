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
  Link as MLink,
} from "@mui/material";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";

const TOKENS = {
  ink: "#0F172A",
  text: "rgba(0,0,0,0.62)",
  subtext: "rgba(0,0,0,0.55)",
  border: "#E7EFE2",
  surface: "#FFFFFF",
  bg: "#F8FBF5",
  iconBg: "#EAF5CD",
  step: "#A8D742",
  link: "#8DBB20",
};

function StepCard({ step, icon, title, lead, body }) {
  return (
    <Box
      sx={{
        bgcolor: TOKENS.surface,
        border: `1px solid ${TOKENS.border}`,
        borderRadius: 4,
        p: { xs: 3, md: 4 },
        height: "100%",
        boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
        transition: "transform 0.2s ease",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      <Stack direction="row" spacing={2.5} alignItems="flex-start">
        {/* ✅ Image tile instead of icon */}
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            bgcolor: TOKENS.iconBg,
            placeItems: "center",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src={`/${icon}`} // ensure your image is in /public
            alt={title}
            width={56}
            height={56}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>

       
      </Stack>
       <Box sx={{ width: "100%", mt:3 }}>
          {/* Step + Title inline */}
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <Typography
              component="span"
              sx={{
                color: TOKENS.step,
                fontWeight: 800,
                fontSize: 30,
                lineHeight: 1,
              }}
            >
              {step}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
                color: TOKENS.ink,
                fontSize: 20,
                lineHeight: 1,
               
              }}
            >
              {title}
            </Typography>
          </Box>

          {/* Lead */}
          <Typography
            sx={{
              mt: 1.25,
              color: TOKENS.text,
              fontSize: 15,
              lineHeight: 1.55,
              fontFamily:"Space Grotesk"
            }}
          >
            {lead}
          </Typography>

          {/* Divider */}
          <Divider sx={{ my: 2.25, borderColor: TOKENS.border }} />

          {/* Body */}
          <Typography
            sx={{
              color: TOKENS.subtext,
              fontSize: 14.5,
              lineHeight: 1.55,
            }}
          >
            {body}
          </Typography>

          {/* Learn more */}
          <MLink
            href="#"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              mt: 2.5,
              fontWeight: 700,
              color: TOKENS.link,
              "&:hover": { color: TOKENS.ink },
            }}
          >
            Learn More <ArrowOutwardRounded sx={{ fontSize: 18 }} />
          </MLink>
        </Box>
    </Box>
  );
}

export default function HowEEIWorks() {
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
          How EEI Works
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            textAlign: "center",
            color: TOKENS.text,
            mt: 1.5,
            maxWidth: 820,
            mx: "auto",
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          Build a profitable, sustainable last-mile delivery business with EEI’s EV fleet, tech and
          guaranteed client assignments
        </Typography>

        {/* Cards */}
        <Grid container spacing={{ xs: 2.5, md: 4 }} sx={{ mt: { xs: 4, md: 6 } }}>
          <Grid item xs={12} md={4}>
            <StepCard
              step="1"
              icon="Background.png"
              title="Lease or Franchise"
              lead="Receive vehicles & charging support with flexible terms"
              body="We provide EV fleet, charging infrastructure guidance, and maintenance support"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <StepCard
              step="2"
              icon="Background (1).png"
              title="Client& Dispatch Allocation"
              lead="Assured load from partners like Amazon, BigBasket, Zomato"
              body="Pre-negotiated contracts ensure steady revenue from day one"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <StepCard
              step="3"
              icon="Background (2).png"
              title="Scale & Earn"
              lead="Operations dashboard & real-time control to maximize profits"
              body="Technology-driven insights help you optimize routes and grow efficiently"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
