import BlogCard from "../shared/blogCard";
import Container from "../utils/container";
import SectionTitle from "../utils/section-title";

export default function Blog() {
  const projectData = [
    {
      title: "Web Developer Profile",
      imageUrl:
        "http://localhost:3000/_next/image?url=%2Fpictures%2Fakm%20syful%20alom%20web%20developer%20about%20us.jpg&w=750&q=75",
      description:
        "Experienced web developer with skills in modern web technologies.",
    },
    {
      title: "Meet Our Team",
      imageUrl:
        "http://localhost:3000/_next/image?url=%2Fpictures%2Fakm%20syful%20alom%20web%20developer%20about%20us.jpg&w=750&q=75",
      description:
        "Introducing team members dedicated to delivering quality web solutions.",
    },
    {
      title: "Developer Spotlight",
      imageUrl:
        "http://localhost:3000/_next/image?url=%2Fpictures%2Fakm%20syful%20alom%20web%20developer%20about%20us.jpg&w=750&q=75",
      description:
        "Highlighting the skills and achievements of our top developer.",
    },
  ];

  return (
    <Container className="">
      <SectionTitle
        title="My Blogs"
        className="text-xl font-semibold  lg:text-2xl"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {projectData?.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </Container>
  );
}
