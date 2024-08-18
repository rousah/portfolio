import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Color } from '../types/colors';

type Props = {
  title: string;
  image: StaticImageData;
  color: Color;
};

export default function Polaroid(props: Props) {
  const borderClassNames = `border-${props.color} border-solid`;
  return (
    <div className="flex flex-col">
      <div
        className={`${borderClassNames} border-[24px] grow flex items-center`}
      >
        <Image
          src={props.image}
          alt="placeholder"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div
        className={`${borderClassNames} border-b-[24px] bg-${props.color} px-[24px] text-right text-4xl`}
      >
        {props.title}
      </div>
    </div>
  );
}
