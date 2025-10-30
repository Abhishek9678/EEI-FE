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
  ButtonBase,
} from "@mui/material";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";

const UI = {
  lime: "#C9F269",
  divider: "#E8E8E8",
  darkCard: "#0E0E0E",
  black: "#0B0B0B",
};

const ITEMS = [
  {
    key: "fleet",
    title: "End-to-end fleet leasing & preventive maintenance",
    icon: "/dispatchblk.png",
    image: "/home.png",
  },
  {
    key: "dispatch",
    title: "Smart dispatch, live GPS tracking & route optimization",
    icon: "/dispatchblk.png",
    image: "/img.jpeg",
  },
  {
    key: "onboarding",
    title: "Rider onboarding, training & safety verification",
    icon: "/onboarding.png",
    image: "/home.png",
  },
  {
    key: "analytics",
    title: "Real-time performance analytics & reporting dashboard",
    icon: "/analytics.png",
    image: "/img.jpeg",
  },
  {
    key: "subscriptions",
    title: "Flexible subscriptions for charging, parking & support",
    icon: "/subscriptions.png",
    image: "/home.png",
  },
];

export default function TurnkeyOperations() {
  // By default, first card active
  const [active, setActive] = React.useState(0);

  return (
    <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid
          container
          columnSpacing={{ xs: 0, md: 4, lg: 6 }}
          rowSpacing={{ xs: 4, md: 0 }}
          alignItems="flex-start"
        >
          {/* LEFT: Title */}
          <Grid item xs={12} md={4} lg={3.5}>
            <Box sx={{ pr: { md: 1 } }}>
              <Typography
                sx={{
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2.5,
                }}
              >
                <Box component="span" sx={{ flex: "0 0 0", borderTop: `1px solid ${UI.divider}` }} />
                Ready To Deploy
                <Box component="span" sx={{ flex: "0 0 0", borderTop: `1px solid ${UI.divider}` }} />
              </Typography>

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "clamp(2rem, 4vw, 3.25rem)", md: "3.1rem" },
                  lineHeight: 1.02,
                  color: "#000",
                }}
              >
                Turnkey EV
                <br />
                Operations
              </Typography>

              <Typography sx={{ mt: 2.5, color: "#000", maxWidth: 320, lineHeight: 1.7 }}>
                From vehicle onboarding to real-time dispatch, we handle the heavy lifting.
              </Typography>
            </Box>
          </Grid>

          {/* MIDDLE: List */}
          <Grid item xs={12} md={8} lg={4.5}>
            <Box>
              {ITEMS.map((item, idx) => {
                const isActive = active === idx;
                return (
                  <Box key={item.key}>
                    {idx !== 0 && <Divider sx={{ borderColor: UI.divider }} />}

                    <Stack
                      direction="row"
                      spacing={2.5}
                      alignItems="center"
                      component={ButtonBase}
                      disableRipple
                      focusRipple={false}
                      onMouseEnter={() => setActive(idx)}
                      onFocus={() => setActive(idx)}
                      onClick={() => setActive(idx)}
                      sx={{
                        width: "100%",
                        textAlign: "left",
                        px: 3,
                        py: 2.6,
                        transition: "all .25s ease",
                        color: isActive ? "#fff" : "#000",
                        backgroundColor: isActive ? UI.darkCard : "#fff",
                        borderLeft: isActive ? `6px solid ${UI.lime}` : "6px solid transparent",
                        borderRadius: isActive ? 1.5 : 0,
                        "& .row-title": { color: isActive ? "#fff" : "#000" },
                        "& .row-icon": { filter: isActive ? "invert(1)" : "none" },
                        "& .row-arrow": { display: isActive ? "grid" : "none" },
                        "&:hover": {
                          backgroundColor: UI.darkCard,
                          borderLeft: `6px solid ${UI.lime}`,
                          color: "#fff",
                          borderRadius: 1.5,
                          "& .row-title": { color: "#fff" },
                          "& .row-icon": { filter: "invert(1)" },
                          "& .row-arrow": { display: "grid" },
                        },
                      }}
                    >
                      <Image className="row-icon" src={item.icon} alt="" width={40} height={40} />
                      <Typography className="row-title" sx={{ fontWeight: 800, lineHeight: 1.25, pr: 2 }}>
                        {item.title}
                      </Typography>

          <Box
  className="row-arrow"
  sx={{
    ml: "auto",
    display: "grid",
    placeItems: "center",
    borderRadius: "50%",
    bgcolor: UI.lime,
    // a touch smaller at every breakpoint
    width:  { xs: 30, sm: 36, md: 40, lg: 44 },
    height: { xs: 30, sm: 36, md: 40, lg: 44 },
    minWidth:  "clamp(26px, 3.2vw, 44px)",
    minHeight: "clamp(26px, 3.2vw, 44px)",
  }}
>
  <ArrowOutwardRounded
    sx={{
      fontSize: { xs: 14, sm: 18, md: 20 },
      color: UI.black,
    }}
  />
</Box>


                    </Stack>
                  </Box>
                );
              })}
              <Divider sx={{ borderColor: UI.divider }} />
            </Box>
          </Grid>

          {/* RIGHT: Image that swaps */}
          <Grid item xs={12} lg={4} sx={{ mt: { xs: 3, md: 0 } }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 280, md: 380, lg: 540 },
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image
                key={ITEMS[active].image}
                src={ITEMS[active].image}
                alt=""
                fill
                sizes="(max-width: 899px) 100vw, (max-width: 1199px) 45vw, 38vw"
                // style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
