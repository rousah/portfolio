import Heading1 from '@/app/components/text/Heading1';
import ProjectCard from '@/app/projects/ProjectCard';
import Heading3 from '@/app/components/text/Heading3';
import projects from '@/app/projects/projects';
import styles from '@/app/projects/[slug]/Project.module.css';

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.id === params.slug);

  return (
    <main className="bg-purple min-w-full min-h-full">
      <div className="min-h-screen p-8 md:p-14 pt-0 md:pt-0 pb-0">
        <Heading1>Projects</Heading1>
        <div className="bg-white p-10">
          {project !== undefined && (
            <>
              <ProjectCard
                title={project.title}
                image={project.image}
                key={project.id}
                id={project.id}
                type={project.type}
              ></ProjectCard>
              <div className="font-lora text-black">
                <Heading3>Description</Heading3>
                <p>{project.description}</p>
                <Heading3>Technologies & languages</Heading3>
                <ul>
                  {project.technologies.map((technology) => (
                    <li key={technology}>- {technology}</li>
                  ))}
                </ul>
                <Heading3>Links</Heading3>
                <ul>
                  {project.links.map((link, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={link}
                      className={styles.linkItem}
                    ></li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
