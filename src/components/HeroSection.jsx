import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HeroSection = () => {
  return (
    <Box
      className="flex flex-col justify-evenly h-screen w-screen text-white gap-6"
    >
      <Box className="flex flex-col h-[25vh] w-full">
    
      </Box>
      <Box className="flex flex-col justify-center h-[75vh] w-screen text-white gap-6 p-8">
        <Typography variant="h1" className="text-6xl sm:text-8xl mb-4">
          Shaan Jain
        </Typography>
        <Box className="w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 mb-4" />
        <Typography className="text-lg font-mono font-thin tracking-widest">
          PROMPT ENGINEERING PORTFOLIO
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;