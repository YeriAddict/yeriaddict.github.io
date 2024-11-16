import { Spacer } from "@nextui-org/spacer";

import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/config/items/projects-items";

export default function ProjectsPageComponent() {
  return (
    <>
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              body={project.body}
              githubLink={project.githubLink}
              header={project.header}
              image={project.image}
              technologies={project.technologies}
              websiteLink={project.websiteLink}
            />
          ))}
        </div>
        <Spacer y={12} />
      </div>
    </>
  );
}
