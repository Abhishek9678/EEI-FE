"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Collapse,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const TESTIMONIALS = [
  {
    img: "/head.png",
    date: "04 January 2025",
    title: "Logistics Head, [Client]",
    text: "LIUM GO helped us cut delivery costs by 28% in three months. Their rider training is a game changer.",
  },
  {
    img: "/rider.png",
    date: "04 January 2025",
    title: "LIUM GO Rider",
    text: "Reliable payouts, great training and better routes — I’m proud to ride EV.",
  },
  {
    img: "/director.png",
    date: "13 July 2024",
    title: "Operations Director, E-Commerce",
    text: "I’ve been with LIUM GO for 8 months — stable income, well–maintained EVs, and a team that actually cares.",
  },
//   {
//     img: "/ev1.png",
//     date: "02 May 2024",
//     title: "Fleet Manager, Partner",
//     text: "Our partnership with LIUM GO simplified EV operations and improved on-time delivery rate significantly.",
//   },
];

export default function TestimonialsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const lime = "#C8F169";

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Small Label */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#666",
            fontSize: { xs: "0.9rem", md: "1rem" },
            mb: 1,
            fontWeight: 500,
          }}
        >
          ✳ Partners ✳
        </Typography>

        {/* Section Title */}
        <Typography
          component="h2"
          align="center"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
            color: "#111",
            mb: { xs: 5, md: 7 },
          }}
        >
          What Our Partners <br /> And Riders Say
        </Typography>

        {/* Grid Layout */}
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
          {TESTIMONIALS.map((t, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <TestimonialCard data={t} lime={lime} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Scroll to top button */}
      <IconButton
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        size="small"
        sx={{
          position: "fixed",
          right: { xs: 14, md: 22 },
          bottom: { xs: 18, md: 24 },
          bgcolor: lime,
          color: "#111",
          borderRadius: 2,
          boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
          "&:hover": { bgcolor: "#d6fa89" },
        }}
      >
        <KeyboardArrowUpRoundedIcon />
      </IconButton>
    </Box>
  );
}

/* ======= Card Component ======= */
function TestimonialCard({ data, lime }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 3,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform .25s ease",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      {/* Image (no crop, fit inside nicely) */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9", // keeps consistent shape
          bgcolor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src={data.img}
          alt={data.title}
          fill
          sizes="(max-width: 600px) 100vw, 400px"
          style={{
            // objectFit: "contain", // ✅ fixes image cropping
            objectPosition: "center",
            // padding: "12px", // gives breathing space like your screenshot
          }}
        />
        {/* Date label */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            bgcolor: lime,
            color: "#111",
            px: 2,
            py: 0.7,
            borderTopRightRadius: 8,
            fontWeight: 600,
            fontSize: "0.85rem",
          }}
        >
          {data.date}
        </Box>
      </Box>

      {/* Text Content */}
      <Box
        sx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            color: "#111",
            fontSize: { xs: "1.1rem", sm: "1.2rem" },
            mb: 1,
            lineHeight: 1.3,
          }}
        >
          {data.title}
        </Typography>

        <Collapse in={expanded} collapsedSize={60}>
          <Typography
            sx={{
              color: "#333",
              fontSize: { xs: "0.95rem", sm: "1rem" },
              lineHeight: 1.6,
              mb: 1,
            }}
          >
            {data.text}
          </Typography>
        </Collapse>

        {/* Read More Button (better alignment + underline) */}
        <Button
          onClick={() => setExpanded(!expanded)}
          disableRipple
          sx={{
            alignSelf: "flex-start",
            mt: "auto",
            color: "#111",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            px: 0,
            "&:hover": { background: "transparent", textDecoration: "underline" },
          }}
        >
          {expanded ? "Read Less" : "Read More"}
        </Button>
      </Box>
    </Box>
  );
}
