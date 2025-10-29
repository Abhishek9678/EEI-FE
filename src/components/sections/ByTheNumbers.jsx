"use client";

import React, { useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const STATS = [
  {
    img: "/ev1.png",
    title: "1,200+ EVs deployed",
  },
  {
    img: "/ev2.png",
    title: "10M+ km delivered monthly",
  },
  {
    img: "/ev3.png",
    title: "95% on-time fulfilment rate",
  },
  {
    img: "/ev4.png",
    title: "Up to 10% annual investor returns",
  },
  {
    img: "/ev1.png",
    title: "1,200+ EVs deployed",
  },
  {
    img: "/ev2.png",
    title: "10M+ km delivered monthly",
  },
  {
    img: "/ev3.png",
    title: "95% on-time fulfilment rate",
  },
  {
    img: "/ev4.png",
    title: "Up to 10% annual investor returns",
  },
];

export default function ByTheNumbers() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sliderRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(4);
  const lime = "#C8F169";

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    afterChange: (index) => setCurrent(index),
  };

  const totalSlides = STATS.length;
  const lastIndex = Math.max(0, totalSlides - visible);
  const prevDisabled = current <= 0;
  const nextDisabled = current >= lastIndex;

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#F4F9F1" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Section Title */}
        <Typography
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "2.6rem" },
            color: "#111",
            mb: { xs: 4, md: 6 },
          }}
        >
          By The Numbers
        </Typography>

        {/* Slider */}
        <Box
          sx={{
            position: "relative",
            ".slick-list": { mx: { xs: -1, sm: -1.5, md: -2 } },
            ".slick-slide > div": { px: { xs: 1, sm: 1.5, md: 2 } },
          }}
        >
          <Slider ref={sliderRef} {...settings}>
            {STATS.map((stat, i) => (
              <Box key={i} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    mx: "auto",
                    mb: 2,
                    width: { xs: 120, sm: 140, md: 160 },
                    height: { xs: 120, sm: 140, md: 160 },
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "6px solid white",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    position: "relative",
                  }}
                >
                  <Image
                    src={stat.img}
                    alt={stat.title}
                    fill
                    sizes="(max-width: 600px) 100vw, 160px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#111",
                    maxWidth: 200,
                    mx: "auto",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  }}
                >
                  {stat.title}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Slider Arrows */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: { xs: 3, md: 4 } }}
        >
          <SquareArrow
            lime={lime}
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={prevDisabled}
          >
            <ArrowBackRoundedIcon />
          </SquareArrow>
          <SquareArrow
            lime={lime}
            onClick={() => sliderRef.current?.slickNext()}
            disabled={nextDisabled}
          >
            <ArrowForwardRoundedIcon />
          </SquareArrow>
        </Stack>

        {/* CTA buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ mt: { xs: 5, md: 7 } }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowOutwardRoundedIcon />}
            sx={{
              bgcolor: lime,
              color: "#111",
              px: 4,
              py: 1.5,
              borderRadius: 999,
              fontWeight: 600,
              textTransform: "none",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              "&:hover": { bgcolor: "#d6fa89" },
            }}
          >
            Speak To Investment Team
          </Button>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <IconButton
              sx={{
                bgcolor: "#111",
                color: lime,
                width: 44,
                height: 44,
                "&:hover": { bgcolor: "#333" },
              }}
            >
              <PhoneRoundedIcon />
            </IconButton>
            <Box textAlign="left">
              <Typography fontWeight={600} color="#000">Contact Us</Typography>
              <Typography variant="body2" color="#000">
                {/* Lorem ipsum dolor */}
                1234567890
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>

     </Box>
  );
}

function SquareArrow({ children, onClick, lime, disabled }) {
  return (
    <IconButton
      aria-disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      sx={{
        width: 52,
        height: 52,
        borderRadius: 2,
        bgcolor: disabled ? "#E9ECD4" : lime,
        color: "#111",
        opacity: disabled ? 0.6 : 1,
        boxShadow: disabled ? "none" : "0 8px 24px rgba(0,0,0,0.12)",
        cursor: disabled ? "not-allowed" : "pointer",
        "&:hover": {
          bgcolor: disabled ? "#E9ECD4" : "#d6fa89",
        },
        transition: "background-color .2s, box-shadow .2s, opacity .2s",
      }}
    >
      {children}
    </IconButton>
  );
}
