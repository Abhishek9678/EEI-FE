"use client";
import * as React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import KeyboardArrowUpRounded from "@mui/icons-material/KeyboardArrowUpRounded";
import { NorthEastRounded } from "@mui/icons-material";

const TOKENS = {
  lime: "#CAE28E",
  limeHover: "#B8E454",
  border: "rgba(255,255,255,0.14)",
};

// NOTE: place /public/hero-video.mp4 in your project
export default function Hero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        pt: { xs: 12, md: 14 },          // space for transparent header
        pb: { xs: 8, md: 10 },
        minHeight: { md: 640 },
        overflow: "hidden",
        isolation: "isolate",            // ensures overlays stack correctly
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
          src="/hero-video.mp4"
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
          // poster="/hero/poster.jpg"   // optional: add a poster for LCP if you have one
        />
      </Box>

      {/* Gradient overlay (exact as requested) */}
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
        {/* Left feature rail (desktop only) */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: { xs: 120, md: 160 },
            display: { xs: "none", lg: "grid" },
            gap: 3,
            width: 350,
            pr: 3,
            mt:3
          }}
        >
          {[
            { icon: "/house.png", lines: ["Flexible EV", "subleasing for 2W", "& 3W"], accent: true },
            { icon: "/hands.png", lines: ["Trained, verified EV", "riders and", "operators"] },
            { icon: "/sun.png",   lines: ["Charging & parking", "infrastructure on", "subscription"], bottom: true },
          ].map(({ icon, lines, accent, bottom }, i) => (
            <Stack
              key={i}
              direction="row"
              spacing={2}
              alignItems="flex-start"
              sx={{
                borderTop: "1px solid " + TOKENS.border,
                pt: 3,px:3,
                ...(bottom ? { borderBottom: "1px solid " + TOKENS.border, pb: 3 } : {}),
              }}
            >
              {/* use next/image only if these images are large; for small UI icons, <img> is fine */}
              <img src={icon} alt="" width={70} height={70} />
              <Box>
                {lines.map((t, idx) => (
                  <Typography
                    key={idx}
                    sx={{ fontWeight: 700, color: accent ? TOKENS.lime : "inherit" }}
                  >
                    {t}
                  </Typography>
                ))}
              </Box>
            </Stack>
          ))}
        </Box>

        {/* Center content */}
        <Box sx={{ mx: "auto", textAlign: "center", maxWidth: 980,pl:{ sm: 0, lg: 18 } }}>
          <Typography variant="h1" component="h1" sx={{ mt: { xs: 4, md: 15 } }}>
            Drive The Future
          </Typography>
          <Typography variant="h1" sx={{ mt: 1 }}>
            Cleaner, Smarter, Electric
          </Typography>
          <Typography sx={{ mt: 2 }} color="text.secondary">
            Eei Services powers scalable EV fleets, last-mile delivery and
          </Typography>
          <Typography color="text.secondary">
            infrastructure sharing for Indian businesses.
          </Typography>

          {/* <Button
            size="large"
            variant="contained"
            color="primary"
            endIcon={<ArrowOutwardRounded />}
            sx={{
              mt: 4,
              bgcolor: TOKENS.lime,
              "&:hover": { bgcolor: TOKENS.limeHover },
              color: "#0B0B0B",
              borderRadius: 999,
              px: 3,
              py: 1.2,
              fontWeight: 800,
            }}
          >
            Get A Free Demo
          </Button> */}

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
                            mt:4,
                            fontSize: 16,
                            "&:hover": { bgcolor: TOKENS.limeHover },
                          }}
                        >
                          Get A Free Demo
                        </Button>
        </Box>

         <Typography
              variant="body2"
              sx={{position: "absolute",
            // right: '26%',
            // pr:{ sm: 0, lg: 18 },
            fontWeight:800,
            width:'100%',
            bottom: 24, opacity: 1, mt: { xs: 6, md: 9 }, textAlign:'center' }}
            >
              Trusted by logistics partners, delivery leaders and B2B brands across India.
            </Typography>

        {/* Scroll to top */}
        {/* <Box
          sx={{
            position: "absolute",
            right: 20,
            bottom: 24,
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
        </Box> */}
      </Container>
    </Box>
  );
}
