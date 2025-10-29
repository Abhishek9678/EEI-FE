'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box, Paper, Typography, TextField, Button, Stack, InputAdornment
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

const schema = yup.object({
  name: yup.string().trim().min(2, 'Too short').max(60, 'Too long').required('Name is required'),
  email: yup.string().trim().email('Enter a valid email').required('Email is required'),
  phone: yup.string().trim().matches(/^[0-9+\-\s()]{7,20}$/, 'Enter a valid phone').required('Phone is required'),
  message: yup.string().trim().max(600, 'Keep it under 600 chars'),
});

export default function ContactFormCard({ onSubmit }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm({ resolver: yupResolver(schema), mode: 'onBlur' });

  const submit = async (data) => {
    if (onSubmit) await onSubmit(data);
    reset();
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 2.5, md: 3 },
        borderRadius: 3,
        bgcolor: '#E9F0E7',
        maxWidth: 380,
        width: '100%',
      }}
    >
      <Typography variant="caption" sx={{ color: '#000', display: 'block', mb: 0.5 }}>
        —• Contact Us •—
      </Typography>

      <Typography component="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.55rem', sm: '1.8rem' }, color: '#151515', mb: 1.5 }}>
        Get In Touch
      </Typography>

      <Stack component="form" onSubmit={handleSubmit(submit)} spacing={1.1}>
        <TextField
          placeholder="Your Name"
          fullWidth
          variant="outlined"
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"><Person2RoundedIcon fontSize="small" /></InputAdornment>
            ),
          }}
          sx={tfSx}
        />
        <TextField
          placeholder="Your E-mail"
          fullWidth
          variant="outlined"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"><EmailRoundedIcon fontSize="small" /></InputAdornment>
            ),
          }}
          sx={tfSx}
        />
        <TextField
          placeholder="Your Number"
          fullWidth
          variant="outlined"
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"><LocalPhoneRoundedIcon fontSize="small" /></InputAdornment>
            ),
          }}
          sx={tfSx}
        />
        <TextField
          placeholder="Additional Details"
          fullWidth
          multiline
          minRows={3}
          variant="outlined"
          {...register('message')}
          error={!!errors.message}
          helperText={errors.message?.message}
          sx={tfSx}
        />

        <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mt: 0.5 }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            sx={{
              px: 2.5, py: 1,
              borderRadius: 999,
              bgcolor: '#C8F169', color: '#0f0f0f',
              fontWeight: 700, textTransform: 'none',
              '&:hover': { bgcolor: '#d8fb89' },
            }}
            endIcon={
              <Box sx={{ width: 26, height: 26, borderRadius: '50%', bgcolor: '#1b1b1b', display: 'grid', placeItems: 'center' }}>
                <ArrowOutwardRoundedIcon sx={{ color: '#C8F169', fontSize: 16 }} />
              </Box>
            }
          >
            Discover
          </Button>

          <Typography variant="caption" sx={{ color: '#000', lineHeight: 1.4 }}>
            Send us your message, and we’ll get back to you within 2–4 business hours.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

/* Inputs match the mock; adornment & icons forced to black */
const tfSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: '#fff',
    borderRadius: 2,
    color: '#000',
  },
  '& .MuiOutlinedInput-input': {
    '::placeholder': { color: '#161616', opacity: 0.7 },
    WebkitTextFillColor: 'inherit',
  },
  /* Fix: adornment not visible (defaults to white) */
  '& .MuiInputAdornment-root': {
    color: '#000',
  },
  '& .MuiSvgIcon-root': {
    color: '#000',
  },
};
