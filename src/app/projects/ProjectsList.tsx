'use client';

import { useState } from 'react';
import ProjectCard from '@/app/projects/ProjectCard';
import projects from '@/app/projects/projects';
import ProjectExpansion from '@/app/projects/ProjectExpansion';

// TODO: fix open projects on rfresh
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
      <div
        className={`project-details ${
          expandedProjectId === project.id ? 'open' : ''
        }`}
      >
        <ProjectExpansion
          project={project}
          borderClassName={borderClassNames}
        ></ProjectExpansion>
        <button
          className={`${borderClassNames} border-t-0 border-green w-full text-green flex justify-center p-1`}
          onClick={() => handleCardClick(project.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-chevron-up"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m8 14 4-4 4 4" />
          </svg>
        </button>
      </div>
      <style jsx>{`
        .project-details {
          transition: max-height 0.4s ease-in-out;
          overflow: hidden;
          max-height: 0;
        }

        .project-details.open {
          max-height: 1000px;
        }
      `}</style>
    </div>
  ));
}
