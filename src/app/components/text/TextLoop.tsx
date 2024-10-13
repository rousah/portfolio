import React from 'react';
import classes from '@/app/components/text/TextLoop.module.css';

type Props = {
  text: string;
};

export default function TextLoop(props: Props) {
  const text = props.text;
  const typeLength = text.length;
  const animationDuration = `${typeLength * 4.5}s`;

  return (
    <div
      className={classes.container}
      style={
        {
          '--text-loop-animation-duration': animationDuration,
        } as React.CSSProperties
      }
    >
      <div className={classes.loopSlide}>
        {Array(20)
          .fill(text)
          .map((type, index) => (
            <span key={index} className="pe-2">
              {type}
            </span>
          ))}
      </div>
      <div className={classes.loopSlide}>
        {Array(20)
          .fill(text)
          .map((type, index) => (
            <span key={index} className="pe-2">
              {type}
            </span>
          ))}
      </div>
    </div>
  );
}
