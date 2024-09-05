import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Button from '@mui/material/Button';

const projects = [
  {
    title: "AI Profile Optimizer",
    description: "Enhance your LinkedIn profile to stand out with tailored content and strategic insights.",
    image: "/images/profile_optimizer.webp",
    appLink: "https://example.com/app/ai_profile_optimizer",
    gptLink: "https://example.com/gpt/ai_profile_optimizer",
  },
  {
    title: "ResumeBoost",
    description: "Transform your resume into a powerful tool that aligns perfectly with your career goals.",
    image: "/images/resume_boost.webp",
    appLink: "https://example.com/app/resume_boost",
    gptLink: "https://example.com/gpt/resume_boost",
  },
  {
    title: "InterviewGPT",
    description: "Master your interviews with tailored mock sessions and real-time feedback.",
    image: "/images/interview_gpt.webp",
    appLink: "https://example.com/app/interview_gpt",
    gptLink: "https://example.com/gpt/interview_gpt",
  },
  {
    title: "OutreachGPT",
    description: "Craft personalized, effective networking messages to connect with industry leaders and collaborators.",
    image: "/images/outreach_gpt.webp",
    appLink: "https://example.com/app/outreach_gpt",
    gptLink: "https://example.com/gpt/outreach_gpt",
  },
];

const ProjectsSection = () => {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 relative">
      <Box className="w-[200px] self-end mr-16 h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 mb-4" />
      <Typography variant="h2" className="text-4xl sm:text-6xl font-bold mb-8">
        Projects
      </Typography>
      <Box className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <Box key={index} className="flex flex-col items-center text-center max-w-xs">
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              className="rounded-lg mb-4"
            />
            <Typography variant="h6" className="text-xl font-bold mb-2">
              {project.title}
            </Typography>
            <Box className="flex gap-2 mb-2">
              <Button variant="contained" color="primary" href={project.appLink}>
                APP
              </Button>
              <Button variant="contained" color="secondary" href={project.gptLink}>
                GPT
              </Button>
            </Box>
            <Typography className="text-lg">
              {project.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className="w-[200px] self-start mt-10 mr-16 h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 mb-4" />
    </Box>
  );
};

export default ProjectsSection;