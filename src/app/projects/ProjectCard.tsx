import React from 'react';
import Image from 'next/image';
import { type Project } from '@/app/projects/projects';

type Props = {
  project: Project;
  borderClassName: string;
};

export default function ProjectCard(props: Props) {
  const project = props.project;
  const borderClassNames = props.borderClassName;

  return (
    <div className="flex flex-col text-black font-radley">
      <div className={`${borderClassNames} border-b-0`}>
        <div className={` grow flex items-center`}>
          <Image
            src={project.image}
            alt="placeholder"
            style={{ width: '100%', height: 'auto' }}
            priority={true}
          />
        </div>
        <div className="bg-pink">{project.type}</div>
      </div>
      <div className={`${borderClassNames} bg-white py-3 text-center text-4xl`}>
        {project.title}
      </div>
    </div>
  );
}
