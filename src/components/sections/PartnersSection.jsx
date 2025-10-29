"use client";

import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

const partners = [
  { name: "mihoku", src: "/mihoku.png" },
  { name: "Rockorn", src: "/rock.png" },
  { name: "HANOKI", src: "/hanoki.png" },
  { name: "Purolator", src: "/puro.png" },
  { name: "Glovo", src: "/glovo.png" },
  { name: "aramex", src: "/aramex.png" },
  { name: "dpd", src: "/dpd.png" },
  { name: "ENERGY", src: "/energy.png" },
  { name: "POWER", src: "/power.png" },
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
            content: '"—— ✶ ——"',
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
        spacing={{ xs: 3, sm: 4, md: 6 }}
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
                width: 120,
                height: 60,
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
