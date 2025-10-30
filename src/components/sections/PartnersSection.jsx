"use client";

import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

const partners = [
  { name: "mihoku", src: "/1.svg" },
  { name: "Rockorn", src: "/2.svg" },
  { name: "HANOKI", src: "/3.svg" },
  { name: "Purolator", src: "/4.svg" },
  { name: "Glovo", src: "/5.svg" },
  { name: "aramex", src: "/6.svg" },
  { name: "dpd", src: "/7.svg" },
  { name: "ENERGY", src: "/8.svg" },
  { name: "POWER", src: "/9.svg" },
  // { name: "Purolator", src: "/10.svg" },
  { name: "Glovo", src: "/11.svg" },
  { name: "aramex", src: "/12.svg" },
  { name: "dpd", src: "/13.svg" },
  { name: "ENERGY", src: "/14.svg" },
  { name: "POWER", src: "/15.svg" },
];

export default function PartnersSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
        bgcolor: "white",
      }}
    >
      {/* Decorative Header */}
      <Typography
        variant="subtitle2"
        sx={{
          color: "grey.600",
          fontWeight: 500,
          mb: 1,
          "&::before, &::after": {
            content: '""',
            mx: 1,
            color: "#000",
          },
        }}
      >
        Partners
      </Typography>

      {/* Main Title */}
      <Typography
        variant={isMobile ? "h5" : "h4"}
        sx={{
          fontWeight: 700,color: "#000",
          mb: { xs: 4, md: 6 },
        }}
      >
        Trusted By Brands Across India
      </Typography>

      {/* Logo Grid */}
      <Grid
        container
        // spacing={{ xs: 3, sm: 4, md: 6 }}
        justifyContent="center"
        alignItems="center"
      >
        {partners.map((partner, i) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            key={i}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              filter: "grayscale(100%)",
              opacity: 0.8,
              transition: "all 0.3s ease",
              "&:hover": {
                filter: "grayscale(0%)",
                opacity: 1,
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: 240,
                height: 120,
                "@media (max-width:600px)": { width: 80, height: 40 },
              }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
