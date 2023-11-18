import ProjectCard from "./ProjectCard";
import { projects } from "../constants/constants";

const Projects = () => {
  return (
    <div className="mt-32" id="projects">
      <h3 className="text-xl sm:text-2xl font-bold text-lightestSlate">
        Projects
      </h3>

      <div className="mt-6 flex flex-col space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
