import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/config/items/projects-items";
import { Spacer } from "@nextui-org/spacer";

export default function ProjectsPageComponent() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            header={project.header}
            body={project.body}
            technologies={project.technologies}
            image={project.image}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
          />
        ))}
      </div>
      <Spacer y= {12} />
    </>
  );
}
