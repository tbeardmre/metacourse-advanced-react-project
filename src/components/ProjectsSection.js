import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Object Oriented Programming",
    description:
      "This is the project that took some objects and showed us how to make them oriented",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Calculator",
    description:
      "We made a calculator with React cuz opening the one on my phone was too easy and worked better",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "React Forms",
    description:
      "This is the spot when things started to get difficult and my brain started to melt",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Receipt Maker",
    description:
      "Remember the simple times when we just made some if else statements and logged em in the console",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#181b24"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
