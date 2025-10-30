"use client";
import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";
import Image from "next/image";

const TOKENS = {
  ink: "#0B0B0B",
  textMuted: "rgba(0,0,0,0.65)",
  lime: "#C9F269",
  limeHover: "#B8E454",
};

function FeatureItem({ title, desc }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      <CheckCircleRounded sx={{ color: "#B3E34B", fontSize: 26, mt: 0.3 }} />
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 18, md: 20 },
            color: TOKENS.ink,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: TOKENS.textMuted,
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.5,
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Stack>
  );
}

export default function HowLiumGoWorks() {
  return (
    <Box
      component="section"
      id="how-lium-go-works"
      sx={{
        bgcolor: "#F2F8F5",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Eyebrow text */}
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 600,
            color: TOKENS.textMuted,
            letterSpacing: 0.5,
            textAlign: "center",
            mb: 1,
          }}
        >
         Turnkey EV Operations — Ready To Deploy
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left side - image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 540,
                mx: "auto",
              }}
            >
              <Image
                src="auto-veichle.png"
                alt="Electric vehicle"
                width={720}
                height={480}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                priority
              />
            </Box>
          </Grid>

          {/* Right side - content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "left", md: "left" }, pr: { md: 4 } }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 32, md: 48 },
                  fontWeight: 800,
                  color: TOKENS.ink,
                  mb: 4,
                  lineHeight: 1.1,
                }}
              >
                How LIUM GO Works
              </Typography>

              <Grid container spacing={4} mb={5}>
                <Grid item xs={12} sm={6}>
                  <FeatureItem
                    title="Lease or Franchise"
                    desc="Choose flexible EV subleasing or launch a LIUM GO hub."
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FeatureItem
                    title="Operate & Dispatch"
                    desc="Trained riders, smart routing, real-time tracking."
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FeatureItem
                    title="Scale & Earn"
                    desc="Expand service area, optimize returns, monitor impact."
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                endIcon={
                  <Box
                    sx={{
                      bgcolor: "#0B0B0B",
                      color: "#fff",
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      ml: 0.5,
                    }}
                  >
                    <NorthEastRounded fontSize="small" />
                  </Box>
                }
                sx={{
                  bgcolor: TOKENS.lime,
                  color: "#0B0B0B",
                  fontWeight: 700,
                  borderRadius: 999,
                  px: 3,
                  py: 1.4,
                  fontSize: 16,
                  "&:hover": { bgcolor: TOKENS.limeHover },
                }}
              >
                See Pricing & Plans
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
