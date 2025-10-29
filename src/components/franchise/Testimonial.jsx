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
} from "@mui/material";
import StarRounded from "@mui/icons-material/StarRounded";

const TOKENS = {
  bg: "#F5FBF2",
  cardBg: "#FFFFFF",
  border: "#E6EDE3",
  textMain: "#0B0B0B",
  textSub: "rgba(0,0,0,0.64)",
  limeBadge: "#DAF1AD",
  limeText: "#7FB316",
  shadow: "0 10px 24px rgba(0,0,0,0.06)",
};

function Stars() {
  return (
    <Stack direction="row" spacing={0.5}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarRounded key={i} sx={{ fontSize: 18, color: "#F6C94C" }} />
      ))}
    </Stack>
  );
}

function QuoteBadge() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: -20,
        left: 28,
        width: 56,
        height: 56,
        borderRadius: "50%",
        bgcolor: TOKENS.limeBadge,
        display: "grid",
        placeItems: "center",
        border: `1px solid ${TOKENS.border}`,
        boxShadow: TOKENS.shadow,
      }}
    >
          <Image
               src="SVG.png"
               alt=""
               width={28}
               height={28}
               style={{ display: "block", objectFit: "contain" }}
             />
    </Box>
  );
}

function TestimonialCard({ quote, name, title, location, avatarSrc }) {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: TOKENS.cardBg,
        border: `1px solid ${TOKENS.border}`,
        borderRadius: 4,
        p: { xs: 3, md: 4 },
        height: "100%",
        boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
      }}
    >
      <QuoteBadge />
      <Stack spacing={2.5}>
        <Stars />

        <Typography sx={{ color: TOKENS.textSub, fontSize: 15, lineHeight: 1.7 }}>
          {quote}
        </Typography>

        <Divider sx={{ borderColor: TOKENS.border }} />

        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={avatarSrc}
              alt={name}
              width={44}
              height={44}
              style={{ objectFit: "cover", display: "block" }}
            />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 800, color: TOKENS.textMain }}>
              {name}
            </Typography>
            <Typography sx={{ color: TOKENS.textSub, fontSize: 13.5 }}>
              {title} {location && `· ${location}`}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

function StatsStrip() {
  const stats = [
    { value: "4.8/5", label: "Partner Satisfaction" },
    { value: "250+", label: "Active Franchises" },
    { value: "98%", label: "Renewal Rate" },
  ];

  return (
    <Box sx={{ mt: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          bgcolor: TOKENS.cardBg,
          border: `1px solid ${TOKENS.border}`,
          borderRadius: 4,
          boxShadow: TOKENS.shadow,
          px: { xs: 2, md: 6 },
          py: { xs: 2.5, md: 3 },
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Grid container>
          {stats.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: 26, md: 30 },
                    color: TOKENS.limeText,
                    mb: 0.5,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography sx={{ color: TOKENS.textSub, fontSize: 14.5 }}>
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default function TestimonialsSection() {
  return (
    <Box component="section" sx={{ bgcolor: TOKENS.bg, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: { xs: 30, md: 40 },
            color: TOKENS.textMain,
            lineHeight: 1.15,
          }}
        >
          What Partners & Riders Say
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
          Real experiences from our franchise partners, riders, and clients
        </Typography>

        {/* Testimonial Cards */}
        <Grid container spacing={{ xs: 2.5, md: 4 }}>
          <Grid item xs={12} md={4}>
            <TestimonialCard
              quote={`“EEI’s franchise model gave us the infrastructure and client base to start strong. We broke even in 14 months and are now scaling to regional operations.”`}
              name="Rajesh Kumar"
              title="City Hub Partner"
              location="Bangalore"
              avatarSrc="/imge-2.jpg"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TestimonialCard
              quote={`“The LIUM GO platform is incredibly efficient. Training was thorough, and the tech dashboard makes operations seamless. Proud to be part of India’s green logistics revolution.”`}
              name="Priya Sharma"
              title="LIUM GO Driver"
              location="Delhi NCR"
              avatarSrc="/image-1.png"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TestimonialCard
              quote={`“EEI’s operational excellence and SLA adherence have been outstanding. Their EV fleet integration reduced our last-mile costs by 18% while improving our sustainability metrics.”`}
              name="Amit Verma"
              title="Operations Director"
              location="E-commerce Brand"
              avatarSrc="/image3.png"
            />
          </Grid>
        </Grid>

        {/* Bottom Stats */}
        <StatsStrip />
      </Container>
    </Box>
  );
}
