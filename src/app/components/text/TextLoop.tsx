import React, { useEffect, useRef, useState } from 'react';
import classes from '@/app/components/text/TextLoop.module.css';

type Props = {
  text: string;
};

export default function TextLoop(props: Props) {
  // TODO: fix loop (project view in mobile)
  const text = props.text;
  const typeLength = text.length;
  const animationDuration = `${typeLength * 4}s`;

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setContentWidth(marqueeRef.current.scrollWidth);
    }
  }, [text]);

  return (
    <div className={classes.container}>
      <div className={classes.loopSlide}>
        {Array(20)
          .fill(text)
          .map((type, index) => (
            <span key={index} className="marquee-item pe-2">
              {type}
            </span>
          ))}
      </div>
    </div>
  );
}
