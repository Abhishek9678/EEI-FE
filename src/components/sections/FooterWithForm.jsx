'use client';

import React from 'react';
import { Box, Container, Grid, Stack, Typography, IconButton, Divider } from '@mui/material';
import ContactFormCard from './ContactFormCard';
import FooterRightPanel from './FooterRightPanel';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Twitter from '@mui/icons-material/X';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';

export default function FooterWithForm() {
  const handleFormSubmit = async (data) => {
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
  };

  return (
    <Box sx={{ backgroundImage: "url('/footerbg.png')", // ✅ Corrected syntax
    backgroundSize: 'cover',                 // ✅ Makes image cover full box
    backgroundRepeat: 'no-repeat',           // ✅ Prevents tiling
    backgroundPosition: 'center',   py: { xs: 4, md: 6 },mt:{ md: 0, lg: 15 } }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          alignItems="flex-start"     // top-aligned and even
        >
          {/* Left: form card */}
          <Grid item xs={12} md={4} lg={4} sx={{ display: 'flex',position:'relative',top:{ md: 0, lg: '-130px' } }}>
            <Box sx={{ width: '100%' }}>
              <ContactFormCard onSubmit={handleFormSubmit} />
            </Box>
          </Grid>

          {/* Right: footer content (same row) */}
          <Grid item xs={12} md={8} lg={8} sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }}>
              <FooterRightPanel />
            </Box>
          </Grid>
        </Grid>
<Divider />
        {/* Bottom bar: reduced gap & pinned visually to bottom of section */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          sx={{ mt: { xs: 2, md: 3 }, pb: 2, gap: 2 }}
        >
          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            All Right Reserved © 2025 EEI
          </Typography>

          <Stack direction="row" spacing={1.2} alignItems="center">
            {[FacebookRoundedIcon, Twitter, Instagram, YouTube].map((Icon, i) => (
              <IconButton key={i} size="small" sx={{ bgcolor: '#fff', color: '#000', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
