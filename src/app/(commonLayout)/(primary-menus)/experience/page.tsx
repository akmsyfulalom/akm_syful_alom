import Experience from "@/components/experience/experience";
import ExperienceHero from "@/components/experience/experience-hero";

import Container from "@/components/utils/container";
import React from "react";

export default function page() {
  return (
    <Container>
      <ExperienceHero />
      <Experience />
    </Container>
  );
}
