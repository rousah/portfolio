import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { type Project } from '@/app/projects/projects';

type Props = {
  project: Project;
  borderClassName: string;
};

export default function ProjectCard(props: Props) {
  const project = props.project;
  const borderClassNames = props.borderClassName;

  const typeLength = project.type.length;
  const animationDuration = `${typeLength * 4}s`;

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setContentWidth(marqueeRef.current.scrollWidth);
    }
  }, [project.type]);

  return (
    <div className="flex flex-col text-black font-radley">
      <div className={`${borderClassNames} border-b-0`}>
        <div className={`grow flex items-center`}>
          <Image
            src={project.image}
            alt="placeholder"
            style={{ width: '100%', height: 'auto' }}
            priority={true}
            className="aspect-4/3 object-contain"
          />
        </div>
        <div className="bg-pink overflow-hidden whitespace-nowrap">
          <div
            className="marquee"
            style={{
              animationDuration,
              width: `${contentWidth}px`,
            }}
            ref={marqueeRef}
          >
            <div className="marquee-content">
              {Array(20)
                .fill(project.type)
                .map((type, index) => (
                  <span key={index} className="marquee-item">
                    {type}
                  </span>
                ))}
              {Array(20)
                .fill(project.type)
                .map((type, index) => (
                  <span key={index + 20} className="marquee-item">
                    {type}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`${borderClassNames} bg-white py-3 text-center text-4xl`}>
        {project.title}
      </div>
      <style jsx>{`
        .marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee linear infinite;
        }
        .marquee-content {
          display: flex;
        }
        .marquee-item {
          display: inline-block;
          padding-right: 0.5rem;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
