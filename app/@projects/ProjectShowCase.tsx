import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectDetails from "./ProjectDetails";
import project from '@/public/svg/image15.svg'

const projectData = {
  "Project-1": {
    title: "Project 1",
    description:
      "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.",
    services: "Business analysis / iOS / Android / QA / UI/UX Design",
    location: "India",
    industry: "Real Estate",
    userGrowth: "400%",
    activeUsers: "+200,000",
    imgSrc: project,
  },
  "Project-2": {
    title: "Project 2",
    description: "Description for Project 2.",
    services: "Services for Project 2",
    location: "Location for Project 2",
    industry: "Industry for Project 2",
    userGrowth: "Growth for Project 2",
    activeUsers: "Users for Project 2",
    imgSrc: project,
  },
  "Project-3": {
    title: "Project 3",
    description: "Description for Project 3.",
    services: "Services for Project 3",
    location: "Location for Project 3",
    industry: "Industry for Project 3",
    userGrowth: "Growth for Project 3",
    activeUsers: "Users for Project 3",
    imgSrc: project,
  },
  "Project-4": {
    title: "Project 4",
    description: "Description for Project 4.",
    services: "Services for Project 4",
    location: "Location for Project 4",
    industry: "Industry for Project 4",
    userGrowth: "Growth for Project 4",
    activeUsers: "Users for Project 4",
    imgSrc: project,
  },
};

const ProjectShowcase = () => {

  return (
    <Tabs defaultValue="Project-1" className="w-full">
      <TabsList>
        {Object.keys(projectData).map((key) => (
          <TabsTrigger
            key={key}
            value={key}
          >
            {projectData[key as keyof typeof projectData].title}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.keys(projectData).map((key) => (
        <TabsContent key={key} value={key}>
          <ProjectDetails {...projectData[key as keyof typeof projectData]} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProjectShowcase;
