import content from '@/app/projects/content.json';
import { StaticImageData } from 'next/image';

const projectsWithImageStrings = content;
const projects = projectsWithImageStrings.map((project) => {
  const image =
    require(`@/app/assets/projects/${project.image_id}.png`).default;

  return {
    ...project,
    image,
  };
});

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: { __html: string }[];
  image: StaticImageData;
  type: string;
};

export default projects;
