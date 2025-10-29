
"use client";
;
import React from 'react';
import {
  Box, Card, Typography, useTheme,
  useMediaQuery,
  Grid,
  Grid2,
} from "@mui/material";
import Image from "next/image";
// import BeautifulDesign from "../../src/Image/beautifulDesign.png"
// import HRMS from "../../src/Image/HRMS.png"
// import Career from "../../public/SVG/Product-Icon/Tingg-Careers-Website.svg"


const aboutData = {
  hero: {
    icon: Career,
    title: "Careers",
    subtitle: "Your All-in-One Hiring & Recruitment Hub",
    subtitle1: "Smart, Intuitive Design ",
    subtitle2: "Introducing Career – a smart, customizable job portal by Tingg.Ai designed to make internal and external hiring effortless for HR teams and engaging for job seekers. "
  },
}

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  return (
    <>

      <Box>
     

        {/* <Box sx={{
        background: 'white',
        px: { xs: 3, sm: 6, md: 14, lg: 20 },
        py: { xs: 2, sm: 3, md: 4 },
      }}>
        <Box sx={{
           position: 'relative', top: '-90px',
        }}>
          <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'space-between',}}>
            <Grid size={6}>
              <Image
                src={BeautifulDesign}
                alt="Overlay Card"
                width={isMobile ? 180 : 450}
                height={isMobile ? 180 : 300}
              />
            </Grid>
            <Grid size={6}>
              <Image
                src={HRMS}
                alt="Overlay Card"
                width={isMobile ? 180 : 550}
                height={isMobile ? 180 : 300}
              />
            </Grid>
          </Grid>


        </Box>
      </Box> */}
        {/* <StartJourney />
        <KeyFeatures />
        <EmpowerVersion /> */}
      </Box>
    </>
  );
}