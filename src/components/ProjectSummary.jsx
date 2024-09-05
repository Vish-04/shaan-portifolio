import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

const ProjectSummary = ({link, title, summary, image}) => {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <Box className="w-[50vw] self-end h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 mb-4" />

      <Box className="flex flex-col sm:flex-row items-center gap-8 max-w-6xl">
        <Box className="flex flex-col items-start flex-1">
          <Typography variant="h2" className="text-4xl sm:text-6xl font-bold mb-4 text-left">
            {title}
          </Typography>
          <Typography variant="h4" className="text-2xl sm:text-3xl font-semibold mb-4 text-left">
            Summary
          </Typography>
          <Typography className="text-lg sm:text-xl text-left">
            {summary}
          </Typography>
        </Box>
        <Box className="flex-shrink-0">
          <Link href={link}>
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSummary;