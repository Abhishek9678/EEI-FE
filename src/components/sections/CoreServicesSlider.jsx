'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const SERVICES = [
  { title: 'Flexible EV Leasing', img: '/ev-lease.png', alt: 'Flexible EV Leasing' },
  { title: 'LIUM GO Dispatch & Delivery', img: '/liumgo-dispatch.png', alt: 'LIUM GO Dispatch & Delivery' },
  { title: 'EV Manpower', img: '/ev-lease.png', alt: 'EV Manpower' },
  { title: 'Infrastructure Sharing', img: '/liumgo-dispatch.png', alt: 'Infrastructure Sharing' },
  { title: 'Flexible EV Leasing', img: '/ev-lease.png', alt: 'Flexible EV Leasing' },
  { title: 'LIUM GO Dispatch & Delivery', img: '/liumgo-dispatch.png', alt: 'LIUM GO Dispatch & Delivery' },
  { title: 'EV Manpower', img: '/ev-lease.png', alt: 'EV Manpower' },
  { title: 'Infrastructure Sharing', img: '/liumgo-dispatch.png', alt: 'Infrastructure Sharing' },
];

export default function CoreServicesSlider() {
  const theme = useTheme();
  const sliderRef = useRef(null);

  // --- NEW: state for disabling arrows
 const [current, setCurrent] = useState(0);
const [slideCount, setSlideCount] = useState(SERVICES.length);
const [visible, setVisible] = useState(4); /// effective slidesToShow

const readMetaFromRef = useCallback(() => {
  const inner = sliderRef.current?.innerSlider;
  // fallbacks so arrows stay safe even before slick mounts
  const sc = SERVICES.length;
  const st = inner?.state?.slidesToShow ?? 4;
  setSlideCount(sc);
  setVisible(st);
}, []);

useEffect(() => {
  // if your data array changes in the future
  setSlideCount(SERVICES.length);
}, [SERVICES.length]);

  const lime = '#C8F169';

 const settings = {
  arrows: false,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 3 } },
    { breakpoint: 1100, settings: { slidesToShow: 3 } },
    { breakpoint: 900,  settings: { slidesToShow: 2 } },
    { breakpoint: 600,  settings: { slidesToShow: 1 } },
  ],
  onInit: () => { readMetaFromRef(); setCurrent(0); },
  onReInit: () => { readMetaFromRef(); },
  afterChange: (index) => { setCurrent(index); readMetaFromRef(); },
};

// --- disabled logic (always render buttons; just disable) ---
const noData = slideCount === 0;
const lastStartIndex = Math.max(0, slideCount - visible);
const prevDisabled = noData || current <= 0;
const nextDisabled = noData || current >= lastStartIndex;

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          align="center"
          sx={{
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#000',
            fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.9rem' },
            mb: { xs: 3, sm: 4, md: 6 },
          }}
        >
          Core Services
        </Typography>

        <Box
          sx={{
            '.slick-list': { mx: { xs: -1, sm: -1.5, md: -2 } },
            '.slick-slide > div': { px: { xs: 1, sm: 1.5, md: 2 } },
            '.slick-track': { display: 'flex', alignItems: 'stretch' },
            '.slick-slide': { height: 'auto' },
            '.slick-slide > div': { height: '100%', display: 'flex' },
          }}
        >
          <Slider ref={sliderRef} {...settings}>
            {SERVICES.map((s, idx) => (
              <Box key={idx} sx={{ height: '100%', width: '100%' }}>
                <ServiceCard service={s} lime={lime} />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Arrows with disabled state */}
     <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: { xs: 3, sm: 4 } }}>
  <SquareArrow
    ariaLabel="Previous"
    onClick={() => sliderRef.current?.slickPrev()}
    lime={lime}
    disabled={prevDisabled}
  >
    <ArrowBackRoundedIcon />
  </SquareArrow>

  <SquareArrow
    ariaLabel="Next"
    onClick={() => sliderRef.current?.slickNext()}
    lime={lime}
    disabled={nextDisabled}
  >
    <ArrowForwardRoundedIcon />
  </SquareArrow>
</Box>

      </Container>

      <IconButton
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        size="small"
        sx={{
          position: 'fixed',
          right: { xs: 14, md: 22 },
          bottom: { xs: 18, md: 24 },
          bgcolor: lime,
          color: '#111',
          borderRadius: 2,
          boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
          '&:hover': { bgcolor: '#d6fa89' },
        }}
      >
        <KeyboardArrowUpRoundedIcon />
      </IconButton>
    </Box>
  );
}

function ServiceCard({ service, lime }) {
  return (
    <Box
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        bgcolor: '#fff',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box sx={{ position: 'relative', pt: '66.66%' }}>
        <Image
          src={service.img}
          alt={service.alt || service.title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 33vw, 25vw"
          style={{ objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            right: 8,
            bottom: 8,
            width: 10,
            height: 10,
            borderRadius: 1,
            bgcolor: lime,
            opacity: 0.95,
          }}
        />
      </Box>

      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography
          component="h3"
          sx={{
            fontWeight: 800,
            color: '#111',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            fontSize: { xs: '1.25rem', sm: '1.35rem', md: '1.5rem' },
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: { xs: 48, sm: 52, md: 60 },
          }}
        >
          {service.title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </Box>
  );
}

// === SquareArrow (prevents clicks when disabled) ===
function SquareArrow({ children, onClick, ariaLabel, lime, disabled }) {
  const safeClick = (e) => {
    if (disabled) return; // do nothing when disabled
    onClick?.(e);
  };

  return (
    <IconButton
      aria-label={ariaLabel}
      aria-disabled={disabled}
      onClick={safeClick}
      disableRipple={disabled}
      sx={{
        width: 56,
        height: 56,
        borderRadius: 2,
        bgcolor: disabled ? '#F0F2E5' : lime,
        color: '#1b1b1b',
        opacity: disabled ? 0.6 : 1, // <— instead of opacity: 0.38 or hiding
        boxShadow: disabled ? 'none' : '0 8px 24px rgba(0,0,0,0.12)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        '&:hover': {
          bgcolor: disabled ? '#F0F2E5' : '#d6fa89',
        },
        '& svg': { fontSize: 24 },
        transition: 'background-color .2s, box-shadow .2s, opacity .2s',
      }}
    >
      {children}
    </IconButton>
  );
}


