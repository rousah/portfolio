'use client';

import Image from 'next/image';
import cloud from '@/app/assets/cloud1.webp';

export default function FloatingClouds() {
  const cloudAnimation = {
    animation: 'moveClouds 30s linear infinite',
  };

  const cloudStyle1 = {
    position: 'absolute',
    top: '20%',
    left: '-10%',
    width: '300px',
    height: 'auto',
    ...cloudAnimation,
  };

  const cloudStyle2 = {
    position: 'absolute',
    top: '50%',
    right: '-10%',
    width: '250px',
    height: 'auto',
    ...cloudAnimation,
  };

  const cloudStyle3 = {
    position: 'absolute',
    top: '80%',
    left: '-10%',
    width: '200px',
    height: 'auto',
    ...cloudAnimation,
  };

  return (
    <>
      <Image
        src={cloud}
        alt="cloud"
        style={cloudStyle1}
        className="floating-cloud"
        priority={false}
      />
      <Image
        src={cloud}
        alt="cloud"
        style={cloudStyle2}
        className="floating-cloud"
        priority={false}
      />
      <Image
        src={cloud}
        alt="cloud"
        style={cloudStyle3}
        className="floating-cloud"
        priority={false}
      />
      <style jsx>{`
        @keyframes moveClouds {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(130%);
          }
        }
      `}</style>
    </>
  );
}
