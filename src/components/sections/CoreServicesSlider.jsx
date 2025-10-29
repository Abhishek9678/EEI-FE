"use client";

import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const services = [
  {
    title: "Flexible EV Leasing",
    image: "/images/flexible-ev-leasing.jpg",
  },
  {
    title: "LIUM GO Dispatch & Delivery",
    image: "/images/lium-go-dispatch.jpg",
  },
  {
    title: "EV Manpower",
    image: "/images/ev-manpower.jpg",
  },
  {
    title: "Infrastructure Sharing",
    image: "/images/infrastructure-sharing.jpg",
  },
];

export default function CoreServicesSlider() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 6, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          color: "#000",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        Core Services
      </Typography>

      <Box position="relative" maxWidth="1200px" mx="auto">
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, i) => (
            <Card
              key={i}
              sx={{
                borderRadius: 2,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
                overflow: "hidden",
                backgroundColor: "#F7FAF9",
                textAlign: "left",
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#000",
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                  }}
                >
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <IconButton
            onClick={() => sliderRef.current.slickPrev()}
            sx={{
              backgroundColor: "#E6F0E8",
              color: "#000",
              "&:hover": { backgroundColor: "#DDECE0" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={() => sliderRef.current.slickNext()}
            sx={{
              backgroundColor: "#E6F0E8",
              color: "#000",
              "&:hover": { backgroundColor: "#DDECE0" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
