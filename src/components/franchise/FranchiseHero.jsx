"use client";
import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import KeyboardArrowUpRounded from "@mui/icons-material/KeyboardArrowUpRounded";

const TOKENS = {
  lime: "#CAE28E",
  limeHover: "#B8E454",
  border: "rgba(255,255,255,0.14)",
};

export default function FranchiseHero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        pt: { xs: 12, md: 14 },
        pb: { xs: 4, md: 6 },
        minHeight: { md: 640 },
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Background video */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -3,
          "& video": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }}
      >
        <video
          src="/franchise_small.mp4"
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
        />
      </Box>

      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          background:
            "linear-gradient(0deg, rgba(22, 22, 22, 0.00) 0%, #161616 100%)",
        }}
      />

      <Container>
        {/* Center content */}
        <Box
          sx={{
            mx: "auto",
            textAlign: "center",
            maxWidth: 980,
            pl: { sm: 0, lg: 18 },
          }}
        >
          <Typography variant="h1" component="h1" sx={{ mt: { xs: 1, md: 3 } }}>
            Drive India's Green Last
          </Typography>
          <Typography variant="h1" sx={{ mt: 1 }}>
            Mile Revolution
          </Typography>
          <Typography sx={{ mt: 2 }} color="text.secondary">
            Join hands with EEI, one of India's leading EV logistics & hyperlocal
          </Typography>
          <Typography color="text.secondary">
            delivery networks — and build a profitable business with purpose.
          </Typography>
           <Box
          direction="row"
  alignItems="center"
  spacing={1.5}
  sx={{
    position: "absolute",
    width: "100%",
    justifyContent:"center",
    left: 0,
    textAlign: "center",
    display:"flex",
    mt:2
  }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 14,
              fontWeight: 500,
              mr:1
            }}
          >
            Trusted by
          </Typography>

          <Stack direction="row" spacing={1.2} justifyContent="center" flexWrap="wrap">
            {["Amazon", "BigBasket", "Zomato"].map((brand, i) => (
              <Chip
                key={i}
                label={brand}
                sx={{
                  color: "grey",
                  bgcolor: "#fff",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontWeight: 600,
                  px: 1.5,
                  "& .MuiChip-label": { px: 1.2 },
                }}
              />
            ))}
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 14,
              fontWeight: 500,
              ml:1
            }}
          >
            & more
          </Typography>
        </Box>
        </Box>

        {/* ✅ Trusted by section (updated to match screenshot) */}
       

        {/* Scroll to top */}
        <Box
          sx={{
            position: "absolute",
            right: 20,
            bottom: 0,
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Button
            variant="contained"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              minWidth: 0,
              p: 1.25,
              borderRadius: 2,
              bgcolor: TOKENS.lime,
              "&:hover": { bgcolor: TOKENS.limeHover },
              color: "#0B0B0B",
            }}
          >
            <KeyboardArrowUpRounded />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
