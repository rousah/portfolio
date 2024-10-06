import React, { useEffect, useRef, useState } from 'react';

type Props = {
  text: string;
};

export default function TextLoop(props: Props) {
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
          .fill(text)
          .map((type, index) => (
            <span key={index} className="marquee-item pe-2">
              {type}
            </span>
          ))}
        {Array(20)
          .fill(text)
          .map((type, index) => (
            <span key={index + 20} className="marquee-item pe-2">
              {type}
            </span>
          ))}
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
