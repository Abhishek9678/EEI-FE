'use client';

import React from 'react';
import {
  Box, Container, Grid, Paper, Typography, TextField, Button, Stack,
  InputAdornment, MenuItem
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Icons
import Person2Rounded from '@mui/icons-material/Person2Rounded';
import BusinessRounded from '@mui/icons-material/BusinessRounded';
import EmailRounded from '@mui/icons-material/EmailRounded';
import SmartphoneRounded from '@mui/icons-material/SmartphoneRounded';
import PublicRounded from '@mui/icons-material/PublicRounded';
import LocationCityRounded from '@mui/icons-material/LocationCityRounded';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';

const LIME = '#CAE28E';
const FOCUS = '#6E61FF';           // purple-ish focus like the mock
const FIELD_BG = '#FBFCFF';        // very light field background
const CARD_BG = '#FFFFFF';
const PAGE_BG = '#F3F7F3';         // pale greenish page bg like screenshot text area

const schema = yup.object({
  fullName: yup.string().trim().min(2, 'Enter your full name').required('Full name is required'),
  company: yup.string().trim().nullable(),
  email: yup.string().trim().email('Enter a valid email').required('Email is required'),
  phone: yup.string().trim()
    .matches(/^[0-9+\-\s()]{7,20}$/, 'Enter a valid phone')
    .required('Phone is required'),
  interest: yup.string().required('Please select an investment interest'),
  city: yup.string().trim().nullable(),
  country: yup.string().trim().nullable(),
  message: yup.string().trim().max(1000, 'Keep it under 1000 characters'),
});

export default function InvestEnquirySection() {
  const {
    register, handleSubmit, formState: { errors, isSubmitting }, reset,
  } = useForm({ resolver: yupResolver(schema), mode: 'onBlur' });

  const onSubmit = async (data) => {
    // TODO: send to your endpoint
    console.log('Investment Enquiry:', data);
    reset();
  };

  return (
    <Box component="section" sx={{ bgcolor: PAGE_BG, py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
          {/* LEFT COPY */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontWeight: 800,
                color: '#0B1220',
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
                fontSize: { xs: '1.9rem', sm: '2.3rem', md: '2.6rem' },
                mb: 1,
              }}
            >
              Let’s Build the Future of
              <br />Green Logistics, Together
            </Typography>
            <Typography sx={{ color: 'rgba(11,18,32,0.65)', maxWidth: 520 }}>
              Share your details and our Investment Relations Team will connect with you soon.
            </Typography>
          </Grid>

          {/* RIGHT FORM CARD */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: 4,       // big rounded
                bgcolor: CARD_BG,
                boxShadow: '0 20px 60px rgba(24,39,75,0.08)',
              }}
            >
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2.2}>
                  {/* Full name */}
                  <Grid item xs={12} md={6}>
                    <Labeled>Full Name</Labeled>
                    <TextField
                    color='#000'
                      fullWidth placeholder="John Carter"
                      {...register('fullName')}
                      error={!!errors.fullName} helperText={errors.fullName?.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person2Rounded fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={fieldSx}
                    />
                  </Grid>

                  {/* Company */}
                  <Grid item xs={12} md={6}>
                    <Labeled>Company</Labeled>
                    <TextField
                      fullWidth placeholder="Your company name"
                      {...register('company')}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <BusinessRounded fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={fieldSx}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} md={6}>
                    <Labeled>Email</Labeled>
                    <TextField
                      fullWidth placeholder="Email address"
                      {...register('email')}
                      error={!!errors.email} helperText={errors.email?.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailRounded fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={fieldSx}
                    />
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} md={6}>
                    <Labeled>Phone number</Labeled>
                    <TextField
                      fullWidth placeholder="+91 9876543210"
                      {...register('phone')}
                      error={!!errors.phone} helperText={errors.phone?.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SmartphoneRounded fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={fieldSx}
                    />
                  </Grid>

                  {/* Investment Interest */}
                  <Grid item xs={12}>
                    <Labeled required>Investment Interest</Labeled>
                   <TextField
  select
  fullWidth
  placeholder="Equity Investment"
  {...register('interest')}
  error={!!errors.interest}
  helperText={errors.interest?.message}
  defaultValue=""
  sx={fieldSx}
  SelectProps={{
    MenuProps: {
      PaperProps: {
        sx: {
          zIndex: 2000,          // ✅ keeps it above modals/cards
          bgcolor: '#fff',        // ✅ ensures visible white background
          color: '#000',          // ✅ black text inside
        },
      },
    },
  }}
>
  <MenuItem value="" disabled>Select interest</MenuItem>
  <MenuItem value="Equity Investment">Equity Investment</MenuItem>
  <MenuItem value="Debt Financing">Debt Financing</MenuItem>
  <MenuItem value="Strategic Partnership">Strategic Partnership</MenuItem>
</TextField>

                  </Grid>

                  {/* City / Country */}
                  <Grid item xs={12} md={6}>
                    <Labeled>City</Labeled>
                    <TextField
                      fullWidth placeholder="Mumbai"
                      {...register('city')}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationCityRounded fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Labeled>Country</Labeled>
                    <TextField
                      fullWidth placeholder="India"
                      {...register('country')}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PublicRounded fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={fieldSx}
                    />
                  </Grid>

                  {/* Message */}
                  <Grid item xs={12}>
                    <Labeled>Message / Proposal</Labeled>
                    <TextField
                      fullWidth multiline minRows={5}
                      placeholder="Tell us about your investment interest..."
                      {...register('message')}
                      error={!!errors.message} helperText={errors.message?.message}
                      sx={fieldSx}
                    />
                  </Grid>

                  {/* CTA */}
                  <Grid item xs={12}>
                    <Stack direction="row" justifyContent="center" sx={{ mt: 0.5 }}>
                      <Button
                        type="submit" disabled={isSubmitting}
                        endIcon={<KeyboardArrowRightRounded />}
                        sx={{
                          bgcolor: LIME, color: '#0E1116',
                          fontWeight: 700, borderRadius: 999,
                          px: 3, py: 1.2, fontSize: 15.5,
                          boxShadow: '0 8px 24px rgba(202,226,142,0.35)',
                          '&:hover': { bgcolor: '#BCD978' },
                        }}
                      >
                        Submit Investment Enquiry
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

/* tiny label component to match screenshot’s text style */
function Labeled({ children, required }) {
  return (
    <Stack direction="row" spacing={0.5} sx={{ mb: 0.75 }}>
      <Typography sx={{ fontWeight: 700, color: '#151A2B', fontSize: 13.5 }}>
        {children}
      </Typography>
      {required ? <Typography sx={{ color: '#E34D5B' }}>*</Typography> : null}
    </Stack>
  );
}

/* field look & feel — exact like mock */
// const fieldSx = {
//   '& .MuiOutlinedInput-root': {
//     bgcolor: FIELD_BG,
//     borderRadius: 2,
//     minHeight: 48,
//     '& fieldset': { borderColor: '#E7EAF1' },
//     '&:hover fieldset': { borderColor: '#D8DDEA' },
//     '&.Mui-focused fieldset': { borderColor: FOCUS, boxShadow: `0 0 0 3px rgba(110,97,255,0.15)` },
//     '& .MuiInputAdornment-root': { color: 'rgba(17,24,39,0.55)' },
//   },
//   '& .MuiOutlinedInput-input': {
//     '::placeholder': { color: 'rgba(17,24,39,0.5)', opacity: 1 },
//   },
//   '& .MuiFormHelperText-root': { mt: 0.5 },
// };


const fieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: FIELD_BG,
    borderRadius: 2,
    minHeight: 48,
    '& fieldset': { borderColor: '#E7EAF1' },
    '&:hover fieldset': { borderColor: '#D8DDEA' },
    '&.Mui-focused fieldset': {
      borderColor: FOCUS,
      boxShadow: `0 0 0 3px rgba(110,97,255,0.15)`,
    },
    '& .MuiInputAdornment-root': { color: 'rgba(17,24,39,0.55)' },
  },
  '& .MuiOutlinedInput-input, & .MuiSelect-select': {
    color: '#000',
    '::placeholder': { color: 'rgba(17,24,39,0.5)', opacity: 1 },
  },
  '& .MuiFormHelperText-root': { mt: 0.5 },
};
