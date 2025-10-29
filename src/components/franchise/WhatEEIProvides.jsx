"use client";
import * as React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Grid2,
  Typography,
  Stack,
} from "@mui/material";
import FirstThreeMonths from "./FirstThreeMonths";

const TOKENS = {
  bg: "#FFFF",
  surface: "#F1F8EF",
  iconBg: "#E4F1CA",
  textMain: "#0B0B0B",
  textSub: "rgba(0,0,0,0.64)",
  border: "#E7EFE2",
};

function ProvideCard({ icon, title, description }) {
  return (
    <Box
      sx={{
        bgcolor: TOKENS.surface,
        border: `1px solid ${TOKENS.border}`,
        borderRadius: 4,
        p: { xs: 3, md: 4 },
        height: "100%",
        transition: "transform .2s ease, box-shadow .2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 18px rgba(0,0,0,0.05)",
        },
      }}
    >
      <Stack spacing={2}>
        {/* ✅ Icon */}
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            bgcolor: TOKENS.iconBg,
            display: "Grid2",
            placeItems: "center",
            flexShrink: 0,
          }}
        >
          <Image
            src={icon}
            alt={title}
            width={56}
            height={56}
            style={{
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>

        {/* ✅ Text */}
        <Box>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: 18,
              color: TOKENS.textMain,
              lineHeight: 1.35,
              mb: 0.5,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              color: TOKENS.textSub,
              lineHeight: 1.6,
              maxWidth: 320,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default function WhatEEIProvides() {
  return (
    <Box component="section" sx={{ bgcolor: TOKENS.bg, py: { xs: 6, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: { xs: 30, md: 40 },
            color: TOKENS.textMain,
            mb: 1,
          }}
        >
          What EEI Provides
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: TOKENS.textSub,
            mb: { xs: 4, md: 6 },
            fontSize: 16,
          }}
        >
          Comprehensive support to ensure your franchise success from day one
        </Typography>

        {/* ✅ Grid2 Layout (2 Rows × 3 Columns) */}
        <Grid2 container spacing={{ xs: 2.5, md: 4 }}>
          <Grid2 item size={4}>
            <ProvideCard
              icon="Background.png"
              title="Electric Vehicle Leasing Support"
              description="Access to EV fleet with flexible leasing terms and competitive rates"
            />
          </Grid2>

          <Grid2 item size={4}>
            <ProvideCard
              icon="Background (9).png"
              title="Fleet Maintenance & Charging Network Assistance"
              description="End-to-end maintenance and charging infrastructure guidance"
            />
          </Grid2>

          <Grid2 item size={4}>
            <ProvideCard
              icon="Background (1).png"
              title="Rider Hiring, Training & Payroll Management"
              description="Complete workforce solutions from recruitment to payroll"
            />
          </Grid2>

          <Grid2 item size={4}>
            <ProvideCard
              icon="Background (9).png"
              title="Client Onboarding & Contract Assurance"
              description="Pre-negotiated contracts with major brands guarantee steady revenue"
            />
          </Grid2>

          <Grid2 item size={4}>
            <ProvideCard
              icon="Background (7).png"
              title="Operations SOPs & Service Quality Monitoring"
              description="Proven standard operating procedures and quality control systems"
            />
          </Grid2>

          <Grid2 item size={4}>
            <ProvideCard
              icon="/Background (6).png"
              title="Technology Dashboard for Real-Time Control"
              description="Advanced analytics and fleet management dashboard for optimization"
            />
          </Grid2>
        </Grid2>
      </Container>
      <FirstThreeMonths />
    </Box>
  );
}
