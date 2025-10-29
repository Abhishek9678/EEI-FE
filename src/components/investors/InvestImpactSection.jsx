'use client';

import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const TOKENS = {
  navy: '#0D1525',         // dark panel bg
  cardBorder: 'rgba(255,255,255,0.12)',
  lime: '#CAE28E',         // numbers
  white: '#FFFFFF',
  muted: 'rgba(255,255,255,0.75)',
  caption: 'rgba(255,255,255,0.65)',
};

/**
 * Reusable section
 * items: [{ value, label, caption }]
 */
export default function InvestImpactSection({
  title = 'Invest in Impact',
  blurb = 'Every rupee invested powers zero-emission delivery, cleaner cities, and sustainable employment. Join us in creating a greener tomorrow while building long-term value.',
  items = [
    { value: '15,000+', label: 'Tonnes CO₂ Saved', caption: 'Annual carbon reduction' },
    { value: '500+',    label: 'Green Jobs Created', caption: 'Sustainable employment' },
    { value: '100%',    label: 'Electric Fleet', caption: 'Zero emission operations' },
  ],
}) {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            px: { xs: 2, sm: 3.5, md: 6 },
            py: { xs: 3.5, sm: 5, md: 6 },
            bgcolor: TOKENS.navy,
            borderRadius: { xs: 3, sm: 4 },
            boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
          }}
        >
          {/* Heading */}
          <Typography
            align="center"
            sx={{
              color: TOKENS.white,
              fontWeight: 800,
              letterSpacing: '-0.01em',
              fontSize: { xs: '1.35rem', sm: '1.6rem' },
            }}
          >
            {title}
          </Typography>

          {/* Blurb */}
          <Typography
            align="center"
            sx={{
              mt: 1.5,
              mx: 'auto',
              maxWidth: 900,
              color: TOKENS.muted,
              fontSize: { xs: '.95rem', sm: '1rem' },
              lineHeight: 1.6,
            }}
          >
            {blurb}
          </Typography>

          {/* Stat cards */}
          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 3 }}
            sx={{ mt: { xs: 2.5, sm: 3 } }}
            justifyContent="center"
          >
            {items.map((it, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    height: '100%',
                    borderRadius: 2.5,
                    border: `1px solid ${TOKENS.cardBorder}`,
                    bgcolor: 'rgba(255,255,255,0.02)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                    px: { xs: 2, sm: 3 },
                    py: { xs: 2, sm: 2.5 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      color: TOKENS.lime,
                      fontWeight: 800,
                      letterSpacing: '-0.01em',
                      fontSize: { xs: '1.6rem', sm: '1.8rem' },
                      lineHeight: 1.1,
                    }}
                  >
                    {it.value}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.6,
                      color: TOKENS.white,
                      fontWeight: 800,
                      fontSize: { xs: '.98rem', sm: '1.05rem' },
                    }}
                  >
                    {it.label}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.7,
                      color: TOKENS.caption,
                      fontSize: { xs: '.85rem', sm: '.9rem' },
                    }}
                  >
                    {it.caption}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
