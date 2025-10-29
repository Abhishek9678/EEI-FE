'use client';

import React, { useMemo } from 'react';
import {
  Box, Container, Grid, Paper, Typography, TextField, Button, Stack,
  InputAdornment, MenuItem
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const TOKENS = {
  lime: '#CAE28E',
  focus: '#6E61FF',
  fieldBg: '#FBFCFF',
  cardBg: '#FFFFFF',
  pageBg: '#F3F7F3',
  ink: '#0B1220',
  inkMuted: 'rgba(11,18,32,0.65)',
};
const LIME = '#CAE28E';
const FOCUS = '#6E61FF';           // purple-ish focus like the mock
const FIELD_BG = '#FBFCFF';        // very light field background
const CARD_BG = '#FFFFFF';
const PAGE_BG = '#F3F7F3'; 
// const fieldSx = {
//   '& .MuiOutlinedInput-root': {
//     bgcolor: TOKENS.fieldBg,
//     borderRadius: 2,
//     minHeight: 44,
//     '& fieldset': { borderColor: '#E7EAF1' },
//     '&:hover fieldset': { borderColor: '#D8DDEA' },
//     '&.Mui-focused fieldset': { borderColor: TOKENS.focus, boxShadow: '0 0 0 3px rgba(110,97,255,0.15)' },
//     '& .MuiInputAdornment-root': { color: 'rgba(17,24,39,0.55)' },
//   },
//   '& .MuiOutlinedInput-input, & .MuiSelect-select': {
//     paddingTop: .75, paddingBottom: .75, fontSize: 14.5,
//     '::placeholder': { color: 'rgba(17,24,39,0.5)', opacity: 1 },
//   },
//   '& .MuiFormHelperText-root': { mt: .5 },
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


function Label({ children, required }) {
  return (
    <Stack direction="row" spacing={0.5} sx={{ mb: 0.75 }}>
      <Typography sx={{ fontWeight: 700, color: '#151A2B', fontSize: 13.5 }}>{children}</Typography>
      {required ? <Typography sx={{ color: '#E34D5B' }}>*</Typography> : null}
    </Stack>
  );
}

/** Build yup schema from field config */
function useSchema(fields) {
  return useMemo(() => {
    const shape = {};
    fields.forEach(f => {
      let s = (f.type === 'textarea' ? yup.string().trim() :
               f.type === 'select'   ? yup.string() : yup.string().trim());
      if (f.required) s = s.required(f.requiredMsg || `${f.label} is required`);
      if (f.email)    s = s.email('Enter a valid email');
      if (f.phone)    s = s.matches(/^[0-9+\-\s()]{7,20}$/, 'Enter a valid phone');
      if (f.max)      s = s.max(f.max, `Keep it under ${f.max} characters`);
      shape[f.name] = s;
    });
    return yup.object(shape);
  }, [fields]);
}

/** Reusable section */
export default function LeadCaptureSection({
  title,
  subtitle,
  fields,             // [{name,label,placeholder,type:'text'|'select'|'textarea', icon, options?, colMd?, required?, email?, phone?, max?, rows?, inputType?}]
  submitLabel = 'Submit',
  onSubmit,
  leftCol  = { xs:12, md:6 },
  rightCol = { xs:12, md:6 },
  pageBg   = TOKENS.pageBg,
  cardProps = {},
  buttonProps = {},
}) {
  const schema = useSchema(fields);
  const { register, handleSubmit, formState:{errors,isSubmitting}, reset } =
    useForm({ resolver: yupResolver(schema), mode:'onBlur' });

  const submit = async (vals) => { await onSubmit?.(vals); reset(); };

  return (
    <Box component="section" sx={{ bgcolor: pageBg, py:{ xs:6, md:8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs:3, md:4 }} alignItems="flex-start">
          {/* Left copy */}
          <Grid item {...leftCol}>
            <Typography sx={{ fontWeight:800, color:TOKENS.ink, letterSpacing:'-0.01em', lineHeight:1.15,
                              fontSize:{ xs:'1.9rem', sm:'2.3rem', md:'2.6rem' }, mb:1 }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography sx={{ color:TOKENS.inkMuted, maxWidth:520 }}>{subtitle}</Typography>
            )}
          </Grid>

          {/* Right card */}
          <Grid item {...rightCol}>
            <Paper elevation={0} sx={{
              p:{ xs:2, sm:2.5 }, borderRadius:4, bgcolor:TOKENS.cardBg,
              boxShadow:'0 20px 60px rgba(24,39,75,0.08)'
            }} {...cardProps}>
              <Box component="form" onSubmit={handleSubmit(submit)}>
                <Grid container spacing={2.2}>
                  {fields.map(f => (
                    <Grid key={f.name} item xs={12} md={f.colMd ?? 6}>
                      <Label required={!!f.required}>{f.label}</Label>

                      {f.type === 'select' ? (
                        <TextField
                          select fullWidth defaultValue={f.defaultValue ?? ''} placeholder={f.placeholder}
                          {...register(f.name)} error={!!errors[f.name]} helperText={errors[f.name]?.message}
                          sx={fieldSx}
                          SelectProps={{
                            MenuProps:{ PaperProps:{ sx:{ zIndex:2000, bgcolor:'#fff', color:'#000' } } }
                          }}
                          InputProps={{ endAdornment: f.icon ? <InputAdornment position="end">{f.icon}</InputAdornment> : null }}
                        >
                          {(f.options||[]).map(opt => (
                            <MenuItem key={opt.value} value={opt.value} disabled={!!opt.disabled}>{opt.label}</MenuItem>
                          ))}
                        </TextField>
                      ) : f.type === 'textarea' ? (
                        <TextField
                          fullWidth multiline minRows={f.rows ?? 5} placeholder={f.placeholder}
                          {...register(f.name)} error={!!errors[f.name]} helperText={errors[f.name]?.message}
                          sx={fieldSx}
                          InputProps={{ endAdornment: f.icon ? <InputAdornment position="end">{f.icon}</InputAdornment> : null }}
                        />
                      ) : (
                        <TextField
                          fullWidth type={f.inputType || 'text'} placeholder={f.placeholder}
                          {...register(f.name)} error={!!errors[f.name]} helperText={errors[f.name]?.message}
                          sx={fieldSx}
                          InputProps={{ endAdornment: f.icon ? <InputAdornment position="end">{f.icon}</InputAdornment> : null }}
                        />
                      )}
                    </Grid>
                  ))}

                  <Grid item xs={12}>
                    <Stack direction="row" justifyContent="center">
                      <Button
                        type="submit" disabled={isSubmitting}
                        sx={{
                          bgcolor: TOKENS.lime, color:'#0E1116', fontWeight:700, borderRadius:999,
                          px:3, py:1.2, fontSize:15.5, boxShadow:'0 8px 24px rgba(202,226,142,0.35)',
                          '&:hover': { bgcolor:'#BCD978' },
                        }}
                        {...buttonProps}
                      >
                        {submitLabel}
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
