import content from '@/app/projects/content.json';

const projectsWithImageStrings = content;
const projects = projectsWithImageStrings.map((project) => {
  const image =
    require(`@/app/assets/${project.image_id}/${project.image_id}.png`).default;

  return {
    ...project,
    image,
  };
});

export default projects;
