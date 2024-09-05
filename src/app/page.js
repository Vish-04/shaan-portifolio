import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Box from '@mui/material/Box';
import Link from 'next/link';
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectSummary from "@/components/ProjectSummary";
import WorkWithMeSection from "@/components/Contact";

export default function Home() {
  const projectSummaries= [
    {
      link: "/resume-booster",
      title: "Resume Booster",
      summary: "The AI Profile Optimizer transforms LinkedIn profiles into compelling showcases of professional brands. It offers comprehensive audit suggestions, crafts impactful headlines, refines profile summaries, proposes competency project ideas, and generates engaging post ideas. This tool enhances profile visibility and appeal, ensuring users stand out to recruiters and industry peers.",
      image: "/images/resume_boost.webp"
    },
    {
      link: "/interview-gpt",
      title: "Interview GPT",
      summary: "InterviewGPT offers tailored mock interviews for specific roles, prepares you for both behavioral and technical questions, simulates salary negotiations, and provides real-time feedback to enhance your performance.",
      image: "/images/interview_gpt.webp"
    },
    {
      link: "/outreach-gpt",
      title: "Outreach GPT",
      summary: "OutreachGPT crafts personalized and effective networking messages to help you connect with industry professionals and hiring managers. It assists with professional networking, mentorship requests, exploring collaborative opportunities, and post-event follow-ups, ensuring each message is engaging, concise, and impactful.",
      image: "/images/outreach_gpt.webp"
    }
  ]
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen w-screen overflow-y-auto">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      {projectSummaries.map((projectSummary) => (
        <ProjectSummary key={projectSummary.link} {...projectSummary} />
      ))}
      <WorkWithMeSection />
    </Box>
  );
}