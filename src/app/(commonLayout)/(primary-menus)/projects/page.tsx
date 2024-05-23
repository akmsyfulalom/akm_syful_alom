import AllProject from "@/components/projects/all-project";
import ProjectsHero from "@/components/projects/projects-hero";
import Container from "@/components/utils/container";

export default function page() {
  return (
    <Container>
      <ProjectsHero />
      <AllProject />
    </Container>
  );
}
