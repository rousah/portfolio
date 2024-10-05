import Heading1 from '@/app/components/text/Heading1';
import ProjectCard from '@/app/projects/ProjectCard';
import projects from '@/app/projects/projects';

export default function Projects() {
  return (
    <main className="bg-purple min-w-full min-h-full">
      <div className="min-h-screen p-8 md:p-14 pt-0 md:pt-0 pb-0">
        <Heading1>Projects</Heading1>
        <div className="bg-white p-10">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              image={project.image}
              key={project.id}
              id={project.id}
              type={project.type}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </main>
  );
}
