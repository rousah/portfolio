import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  image: StaticImageData;
  type: string;
  id: string;
};

export default function ProjectCard(props: Props) {
  const borderClassNames = 'border-green border-solid border-3';

  return (
    <Link
      href={`projects/${props.id}`}
      className="flex flex-col text-black font-radley"
    >
      <div className={`${borderClassNames} border-b-0`}>
        <div className={` grow flex items-center`}>
          <Image
            src={props.image}
            alt="placeholder"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="bg-pink">{props.type}</div>
      </div>
      <div className={`${borderClassNames} bg-white py-3 text-center text-4xl`}>
        {props.title}
      </div>
    </Link>
  );
}
