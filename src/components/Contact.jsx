import Image from "next/image";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function WorkWithMeSection() {
  return (
    <Box className="flex items-center justify-evenly min-h-screen w-screen overflow-y-auto p-8">
      <Typography variant="h1" className="w-[500px] text-center">Work With Me</Typography>
      <Image src="/images/p2_img.jpg" alt="Profile Picture" width={300} height={300} />

      <Box className="flex flex-col h-max mt-auto mb-auto items-start">
        <Box className="w-full self-end bg-gradient-to-r h-0.5 from-purple-400 via-blue-500 to-green-500 mb-8" />
        <Box className="flex items-center mb-4">
          <FaLinkedin size={48} />
          <Box>
            <Typography className="text-xl ml-2">LinkedIn</Typography>
            <Link href="https://linkedin.com/in/jain-shaan" className="text-xl ml-2 text-blue-400 hover:text-blue-500 hover:underline transition-all duration-300" >https://linkedin.com/in/jain-shaan</Link>
          </Box>
        </Box>
        <Box className="flex items-center mb-4">
          <FaEnvelope size={48} />
          <Box>
            <Typography className="text-xl ml-2">Email</Typography>
            <Link href="mailto:shaanjain00@gmail.com" className="text-xl ml-2 text-blue-400 hover:text-blue-500 hover:underline transition-all duration-300" >shaanjain00@gmail.com</Link>
          </Box>
        </Box>
        <Box className="flex items-center mb-4">
          <FaPhone size={48} />
          <Box>
            <Typography className="text-xl ml-2">Phone</Typography>
            <Link href="tel:+14088969528" className="text-xl ml-2 text-blue-400 hover:text-blue-500 hover:underline transition-all duration-300">+1 (408) 896-9528</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}