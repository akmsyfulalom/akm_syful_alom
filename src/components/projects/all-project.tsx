import React from "react";
import Sorted from "./sorted";
import ProjectCard from "../shared/ProjectCard";

export default function AllProject() {
  const projectData = [
    {
      title: "Web Developer Profile",
      imageUrl: "/pictures/gym.png",
      description:
        "Experienced web developer with skills in modern web technologies.",
    },
    {
      title: "Web Developer Profile",
      imageUrl: "/pictures/gym.png",
      description:
        "Experienced web developer with skills in modern web technologies.",
    },
    {
      title: "Web Developer Profile",
      imageUrl: "/pictures/gym.png",
      description:
        "Experienced web developer with skills in modern web technologies.",
    },
    {
      title: "Web Developer Profile",
      imageUrl: "/pictures/gym.png",
      description:
        "Experienced web developer with skills in modern web technologies.",
    },
    {
      title: "Web Developer Profile",
      imageUrl: "/pictures/gym.png",
      description:
        "Experienced web developer with skills in modern web technologies.",
    },
    {
      title: "Meet Our Team",
      imageUrl:
        "https://akm-syful-alom.vercel.app/_next/image?url=%2Fpictures%2Fakm%20syful%20alom%20web%20developer%20about%20us.jpg&w=750&q=75",
      description:
        "Introducing team members dedicated to delivering quality web solutions.",
    },
    {
      title: "Developer Spotlight",
      imageUrl:
        "https://akm-syful-alom.vercel.app/_next/image?url=%2Fpictures%2Fakm%20syful%20alom%20web%20developer%20about%20us.jpg&w=750&q=75",
      description:
        "Highlighting the skills and achievements of our top developer.",
    },
  ];
  return (
    <div>
      <Sorted />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {projectData?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
