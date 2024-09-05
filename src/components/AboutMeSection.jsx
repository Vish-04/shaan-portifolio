import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const AboutMeSection = () => {
  return (
    <Box className="flex items-center gap-8 justify-center min-h-screen bg-black text-white p-8">
            <Box className="flex flex-col">
            <Typography variant="h2" className="text-4xl sm:text-6xl font-bold mb-8">
                About Me
            </Typography>
            <Image
                src="/images/p1_img.JPG"
                alt="Profile Picture"
                width={300}
                height={300}
                objectFit="cover"
                objectPosition="center"
            />
            </Box>
            <Typography className="text-lg sm:text-xl max-w-2xl">
            Hello, I'm Shaan Jain, an AI prompt engineer and entrepreneur based in the San Francisco Bay Area. My passion lies in harnessing the power of AI to solve real-world problems and drive business transformation. As the Founder and Chief AI Solutions Architect at AI-Powered Human Solutions (DBA Jain Recruiting), I have built custom AI assistants that have not only improved client efficiency by 60% but have also supported over 1,000 users.
            </Typography>
    </Box>
  );
};

export default AboutMeSection;