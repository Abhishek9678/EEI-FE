'use client';

import React from 'react';
import {
  Box, Grid, Typography, Divider, Stack, Link as MLink,
} from '@mui/material';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Image from 'next/image';

const rays = `radial-gradient(1000px 400px at 30% 100%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 60%)`;

export default function FooterRightPanel({ sections = defaultSections, brand = defaultBrand }) {
  return (
    <Box sx={{ color: '#e9efe7', pl: { md: 3 }, background: rays, borderRadius: 2, pt: { xs: 2, md: 3 }, pb: { xs: 2, md: 2 } }}>
      {/* Contact quick row */}
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 2, md: 3 } }}>
        {[
          { icon: <ChatBubbleOutlineRoundedIcon />, title: 'Talk To Us', detail: '(+000) 12345 6789' },
          { icon: <HelpOutlineRoundedIcon />, title: 'Help Centre', detail: 'support@example.com' },
          { icon: <MailOutlineRoundedIcon />, title: 'Write To Us', detail: 'info@example.com' },
        ].map((item, i) => (
          <Grid key={i} item xs={12} sm={4}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.12)', display: 'grid', placeItems: 'center' }}>
                {item.icon}
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, color: '#fff' }}>{item.title}</Typography>
                <Typography sx={{ opacity: 0.9 }}>{item.detail}</Typography>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)', mb: { xs: 2, md: 3 } }} />

      {/* Middle: brand + wider link columns */}
      <Grid container spacing={{ xs: 2.5, md: 3 }}>
        <Grid item xs={12} sm={5} md={3}>
          <Stack spacing={1.2}>
            <Image src="/EEI SERVICES LOGO 1.png" alt="EEI Services" width={70} height={70} priority />
            <Typography sx={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
              {brand.tagline}
            </Typography>
            <MLink href="#" underline="none" sx={{ color: '#C8F169', fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
              Discover More
            </MLink>
          </Stack>
        </Grid>

        {sections.map((col, idx) => (
          <Grid key={idx} item xs={6} sm={3} md={3}>
            <Typography sx={{ fontWeight: 800, mb: 1, color: '#fff' }}>{col.heading}</Typography>
            <Stack spacing={0.7}>
              {col.links.map((l, i) => (
                <MLink key={i} href={l.href || '#'} underline="none"
                  sx={{ color: 'rgba(233,239,231,0.85)', '&:hover': { color: '#fff' }, fontSize: '.95rem' }}>
                  {l.label}
                </MLink>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const defaultBrand = { tagline: 'Go Solar. Save Money. Save The Planet' };
const defaultSections = [
  { heading: 'Information', links: [{ label: 'Our Locations' }, { label: 'Affiliate Program' }, { label: 'Calculator' }, { label: 'Global Operations' }, { label: 'Chat Support' }] },
  { heading: 'Support', links: [{ label: 'Solutions' }, { label: 'What We Do' }, { label: 'Request a Freight' }, { label: 'Track & Trace' }, { label: 'Brokerage Terms' }] },
  { heading: 'Services', links: [{ label: 'Solar Installation' }, { label: 'Consulting Services' }, { label: 'Energy Audits' }, { label: 'Case Studies' }, { label: 'Video Tutorials' }] },
];
