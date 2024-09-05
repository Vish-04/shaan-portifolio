import Image from "next/image";
import Box from '@mui/material/Box';
import Link from 'next/link';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function WorkWithMeSection() {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen w-screen overflow-y-auto">
      <h2>Work With Me</h2>
      <Image src="/images/p2_img.jpg" alt="Profile Picture" width={200} height={200} />
      <Box className="flex flex-col items-start">
        <Box className="flex items-center">
          <FaLinkedin size={24} />
          <Link href="https://linkedin.com/in/jain-shaan">LinkedIn</Link>
        </Box>
        <Box className="flex items-center">
          <FaEnvelope size={24} />
          <Link href="mailto:shaanjain00@gmail.com">shaanjain00@gmail.com</Link>
        </Box>
        <Box className="flex items-center">
          <FaPhone size={24} />
          <span>+1 (408) 896-9528</span>
        </Box>
      </Box>
    </Box>
  );
}