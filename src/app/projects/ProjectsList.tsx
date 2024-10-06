'use client';

import { useState } from 'react';
import ProjectCard from '@/app/projects/ProjectCard';
import projects from '@/app/projects/projects';
import ProjectExpansion from '@/app/projects/ProjectExpansion';

export default function ProjectsList() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    null
  );
  const borderClassNames = 'border-green border-solid border-3';

  const handleCardClick = (projectId: string) => {
    setExpandedProjectId((previousId) =>
      previousId === projectId ? null : projectId
    );
  };

  return projects.map((project) => (
    <div key={project.id}>
      <button onClick={() => handleCardClick(project.id)} className="w-full">
        <ProjectCard
          project={project}
          borderClassName={borderClassNames}
        ></ProjectCard>
      </button>
      {expandedProjectId === project.id && (
        <ProjectExpansion
          project={project}
          borderClassName={borderClassNames}
        ></ProjectExpansion>
      )}
    </div>
  ));
}
