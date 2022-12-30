import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hey, I'm Tom!";
const bio1 = "A frontend developer";
const bio2 = "trying to specialize in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

    <Avatar 
      size='2xl'
      name='Pete'
      src='https://i.pravatar.cc/150?img=12'
    />

    <VStack>
      <Heading size='sm' mb={10}>{greeting}</Heading>
      <Heading size='2xl'>{bio1}</Heading>
      <Heading size='xl'>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
