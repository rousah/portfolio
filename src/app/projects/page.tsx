import Heading1 from '@/app/components/text/Heading1';
import ProjectCard from '@/app/projects/ProjectCard';
import aboutMeImage from '@/app/assets/about_me/about_me.png';

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      image: aboutMeImage,
      id: '0',
      type: 'videogame',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      image: aboutMeImage,
      id: '1',
      type: 'website',
    },
  ];

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
