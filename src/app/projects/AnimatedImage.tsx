import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import '@/app/projects/AnimatedImage.css';

interface AnimatedPhotoProps {
  src: StaticImageData;
}

const AnimatedImage = ({ src }: AnimatedPhotoProps) => {
  const [filter, setFilter] = useState({
    brightness: 1,
    saturate: 1,
  });

  useEffect(() => {
    const applyTurbulence = () => {
      const randomBrightness = Math.random() * 0.2 + 0.9;
      const randomSaturate = Math.random() * 1.5 + 0.5;
      setFilter({
        brightness: randomBrightness,
        saturate: randomSaturate,
      });
    };

    const interval = setInterval(applyTurbulence, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={src}
      alt="placeholder"
      style={{
        width: '100%',
        height: 'auto',
        filter: `brightness(${filter.brightness}) saturate(${filter.saturate})`,
      }}
      priority={true}
      className="aspect-4/3 object-contain animated-photo"
    />
  );
};

export default AnimatedImage;
