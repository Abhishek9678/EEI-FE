import React from 'react';
import { Box } from '@mui/material';

const VideoSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh', // Full viewport height
        overflow: 'hidden',
      }}
    >
      <Box
        component="video"
        sx={{
          width: '100%',
          height: '100%', // Fill the entire container
          objectFit: 'cover', // Maintain aspect ratio while covering the entire screen
        }}
        autoPlay
        muted
        loop
        controls
      >
        <source
          src="solar.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </Box>
    </Box>
  );
};

export default VideoSection;
