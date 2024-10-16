import Heading3 from '@/app/components/text/Heading3';
import { type Project } from '@/app/projects/projects';
import styles from '@/app/components/Link.module.css';

type Props = {
  project: Project;
  borderClassName: string;
};

export default function ProjectExpansion(props: Props) {
  const project = props.project;
  const borderClassNames = props.borderClassName;

  return (
    <div className={`font-lora text-black ${borderClassNames} border-t-0 p-4`}>
      <Heading3>Description</Heading3>
      <p className="mb-2">{project.description}</p>
      <Heading3>Technologies & languages</Heading3>
      <ul className="mb-2">
        {project.technologies.map((technology) => (
          <li key={technology}>- {technology}</li>
        ))}
      </ul>
      <Heading3>Links</Heading3>
      <ul className="mb-2">
        {project.links.map((link, i) => (
          <li
            key={i}
            dangerouslySetInnerHTML={link}
            className={styles.linkItem}
          ></li>
        ))}
      </ul>
    </div>
  );
}
