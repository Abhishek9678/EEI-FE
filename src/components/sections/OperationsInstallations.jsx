'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';

/**
 * EXACT layout:
 * ┌─────────────────────────────┬──────────────────────┐
 * │ 16:9 (left-top)             │ 4:3 (right-top)      │
 * ├─────────────────────────────┼──────────────────────┤
 * │ 16:9 (left-bottom)          │ 16:9 (right-bottom)  │
 * └─────────────────────────────┴──────────────────────┘
 * Left column is wider (≈7/12), right column ≈5/12.
 */

export default function OperationsInstallations() {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
        variant="subtitle2"
        align="center"
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
        Project
      </Typography>
        <Typography
          component="h2"
          align="center"
          sx={{
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#111',
            fontSize: { xs: '1.7rem', sm: '2.2rem', md: '2.6rem' },
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          Operations & Installations
        </Typography>

        {/* CSS Grid = rock-solid, no overlap */}
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 2, sm: 2.5, md: 3 },       // same gutter as screenshot
            // two columns on md+, single column on mobile
            gridTemplateColumns: {
              xs: '1fr',
              md: '7fr 5fr',                     // left wider than right (≈7/12 vs 5/12)
            },
          }}
        >
          {/* Left column */}
          <Box sx={{ display: 'grid', gap: { xs: 2, sm: 2.5, md: 3 } }}>
            <MediaCard
              src="/operations1.png"  // ensure these exist in /public
              alt="Fleet operations"
              ratio="16 / 9"
            />
            <MediaCard
              src="/operations2.png"
              alt="Charging & infrastructure"
              ratio="16 / 9"
            />
          </Box>

          {/* Right column */}
          <Box sx={{ display: 'grid', gap: { xs: 2, sm: 2.5, md: 3 } }}>
            <MediaCard
              src="/operations3.png"
              alt="Warehouse operations"
              ratio="4 / 3"
            />
            <MediaCard
              src="/operations4.png"
              alt="Leasing discussion"
              ratio="16 / 9"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/** MediaCard
 * - Uses CSS aspect-ratio (supported in all modern browsers)
 * - Also includes a padding-top fallback to guarantee height (no overlap)
 * - next/image with fill + objectFit cover (never stretched)
 */
function MediaCard({ src, alt, ratio = '16 / 9' }) {
  // Convert "W / H" to numeric for padding-top fallback
  const [w, h] = String(ratio).split('/').map(v => parseFloat(v.trim()));
  const padTop = h && w ? `${(100 * h) / w}%` : '56.25%';

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        bgcolor: '#f3f5f7',
        aspectRatio: ratio,              // primary: fixes height without JS
        // fallback for any edge engine:
        '&::before': {
          content: '""',
          display: 'block',
          paddingTop: padTop,           // ensures non-zero height even if aspect-ratio unsupported
        },
        // When aspect-ratio works, remove fallback space:
        '@supports (aspect-ratio: 1 / 1)': {
          '&::before': { display: 'none' },
        },
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 50vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority={false}
      />
    </Box>
  );
}
