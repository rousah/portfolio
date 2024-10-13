import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

interface AnimatedPhotoProps {
  src: StaticImageData;
}

const AnimatedImage = ({ src }: AnimatedPhotoProps) => {
  const [filter, setFilter] = useState({
    brightness: 1,
    saturate: 1,
  });

  const getRandomInteger = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  };

  useEffect(() => {
    const applyTurbulence = () => {
      const randomBrightness = Math.random() * 0.2 + 0.9;
      const randomSaturate = Math.random() * 1.5 + 0.5;

      setFilter({
        brightness: randomBrightness,
        saturate: randomSaturate,
      });
    };

    const filterInterval = () => {
      const time = getRandomInteger(1000, 3000);
      applyTurbulence();
      setTimeout(() => {
        filterInterval();
      }, time);
    };

    filterInterval();
  }, []);

  return (
    <Image
      src={src}
      alt="placeholder"
      style={{
        width: '100%',
        height: 'auto',
        filter: `brightness(${filter.brightness}) saturate(${filter.saturate})`,
        transition: '-webkit-filter 1000ms ease-in-out',
      }}
      priority={true}
      className="aspect-4/3 object-contain animated-photo"
    />
  );
};

export default AnimatedImage;
