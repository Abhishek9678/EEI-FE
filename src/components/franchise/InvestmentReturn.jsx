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
  Button,
} from "@mui/material";

const TOKENS = {
  bg: "#FFFFFF",
  leftCardBg: "#F7FBF5",
  leftCardBorder: "#CFE7C1",
  rowBg: "#EFF6EA",
  rowBorder: "#E6EDE3",
  textMain: "#0B0B0B",
  textSub: "rgba(0,0,0,0.66)",
  limeTile: "#EAF5CD",
  lime: "#CAE28E",
  limeHover: "#B8D778",
  rightCardBg: "#FFFFFF",
  rightCardBorder: "#F0F3ED",
  shadowSoft: "0 10px 24px rgba(0,0,0,0.06)",
};

/* tiny lime bullet */
function Dot() {
  return (
    <Box
      component="span"
      sx={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        bgcolor: "#9ACD4F",
        display: "inline-block",
        flexShrink: 0,
      }}
    />
  );
}

/* Row with left icon tile and text */
function Row({ iconSrc, title, subtitle }) {
  return (
    <Box
      sx={{
        bgcolor: TOKENS.rowBg,
        border: `1px solid ${TOKENS.rowBorder}`,
        borderRadius: 3,
        p: { xs: 2.25, md: 2.5 },
        display: "flex",
        alignItems: "center",
        gap: 1.75,
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 2,
          bgcolor: TOKENS.limeTile,
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
        }}
      >
        <Image
          src={iconSrc}
          alt=""
          width={28}
          height={28}
          style={{ display: "block", objectFit: "contain" }}
        />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 800, color: TOKENS.textMain }}>
          {title}
        </Typography>
        <Typography sx={{ color: TOKENS.textSub, fontSize: 14.5 }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

/* Right card bullet row */
function BulletRow({ children }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
      <Dot />
      <Typography sx={{ color: TOKENS.textSub, fontSize: 15 }}>
        {children}
      </Typography>
    </Box>
  );
}

export default function InvestmentReturns() {
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
            color: TOKENS.textMain,
          }}
        >
          Investment & Returns
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: TOKENS.textSub,
            mt: 1,
            mb: { xs: 4, md: 6 },
            fontSize: 16,
          }}
        >
          Transparent investment models designed for profitability
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {/* LEFT: Framework + rows */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: TOKENS.leftCardBg,
                border: `2px solid ${TOKENS.leftCardBorder}`,
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    bgcolor: TOKENS.limeTile,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  {/* replace with your PNG */}
                  <Image
                    src="/c0d95fad-98c6-4432-91fd-fb8e7e655cc7.png"
                    alt=""
                    width={28}
                    height={28}
                    style={{ display: "block", objectFit: "contain" }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontWeight: 800, fontSize: 20, color: TOKENS.textMain }}
                  >
                    Guaranteed Profitability Framework
                  </Typography>
                  <Typography
                    sx={{
                      color: TOKENS.textSub,
                      fontSize: 15,
                      lineHeight: 1.65,
                      mt: 0.75,
                    }}
                  >
                    We ensure assured business allocation to guarantee
                    profitability. Our franchise partners receive pre-negotiated
                    contracts with India’s leading e-commerce and quick-commerce
                    brands, eliminating client acquisition risk.
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Box sx={{ mt: 2.5 }}>
              <Stack spacing={2}>
                <Row
                  iconSrc="/Screenshot (21).png"
                  title="Assured Business Allocation"
                  subtitle="Pre-negotiated contracts with major brands guarantee revenue from day one"
                />
                <Row
                  iconSrc="/Screenshot (21).png"
                  title="Flexible Breakeven Timeline"
                  subtitle="12–30 months depending on franchise model and market conditions"
                />
                <Row
                  iconSrc="/Screenshot (21).png"
                  title="Scalable Growth Path"
                  subtitle="Upgrade from micro to city to regional as your operations mature"
                />
              </Stack>
            </Box>

            <Typography
              sx={{
                color: TOKENS.textSub,
                fontSize: 14.5,
                mt: 3,
              }}
            >
              Custom investment sheets and detailed earning models are shared
              during the onboarding process based on your chosen franchise model
              and location.
            </Typography>
          </Grid>

          {/* RIGHT: Investment Sheet card with lime slanted backdrop */}
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            {/* slanted lime backdrop */}
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: 18,
                right: 18,
                left: { xs: 24, md: 40 },
                bottom: 18,
                bgcolor: TOKENS.lime,
                borderRadius: 4,
                transform: "skewX(-6deg)",
                zIndex: 0,
                boxShadow: TOKENS.shadowSoft,
              }}
            />

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                bgcolor: TOKENS.rightCardBg,
                border: `1px solid ${TOKENS.rightCardBorder}`,
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                boxShadow: TOKENS.shadowSoft,
              }}
            >
              {/* icon tile */}
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2,
                  bgcolor: TOKENS.limeTile,
                  display: "grid",
                  placeItems: "center",
                  mb: 1.5,
                }}
              >
                {/* replace with your PNG */}
                <Image
                  src="/Background (10).png"
                  alt=""
                  width={28}
                  height={28}
                  style={{ display: "block", objectFit: "contain" }}
                />
              </Box>

              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: 22,
                  color: TOKENS.textMain,
                }}
              >
                Get Detailed Investment Sheet
              </Typography>
              <Typography
                sx={{
                  color: TOKENS.textSub,
                  mt: 1,
                  fontSize: 15,
                }}
              >
                Request comprehensive financial projections tailored to your franchise
                model
              </Typography>

              {/* soft list panel */}
              <Box
                sx={{
                  mt: 2.25,
                  bgcolor: TOKENS.rowBg,
                  border: `1px solid ${TOKENS.rowBorder}`,
                  borderRadius: 3,
                  p: { xs: 2, md: 2.25 },
                }}
              >
                <Stack spacing={1.25}>
                  <BulletRow>Model-specific investment breakdown</BulletRow>
                  <BulletRow>Revenue projections & ROI timeline</BulletRow>
                  <BulletRow>Operating cost structure</BulletRow>
                  <BulletRow>Client allocation guarantees</BulletRow>
                </Stack>
              </Box>

              {/* CTA */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2.75,
                  bgcolor: TOKENS.lime,
                  color: "#0B0B0B",
                  fontWeight: 800,
                  borderRadius: 2,
                  py: 1.25,
                  boxShadow:
                    "0 6px 0 rgba(0,0,0,0.12), 0 18px 28px rgba(168,212,66,0.25)",
                  "&:hover": { bgcolor: TOKENS.limeHover },
                }}
              >
                Request Investment Sheet
              </Button>

              <Typography
                sx={{
                  textAlign: "center",
                  color: TOKENS.textSub,
                  fontSize: 13.5,
                  mt: 1.25,
                }}
              >
                Our franchise team will contact you within 48 hours
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
