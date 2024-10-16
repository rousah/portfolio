'use client';

import Image from 'next/image';
import cloud from '@/app/assets/cloud1.webp';
import { CSSProperties } from 'react';

export default function FloatingClouds() {
  const commonStyle: CSSProperties = {
    position: 'absolute',
    height: 'auto',
    zIndex: 51,
    pointerEvents: 'none',
  };

  const cloudStyle1: CSSProperties = {
    ...commonStyle,
    top: '15%',
    marginLeft: '105%',
    width: '300px',
    animation: 'moveClouds 70s linear infinite',
    animationDelay: '4s',
    opacity: 1,
  };

  const cloudStyle2: CSSProperties = {
    ...commonStyle,
    top: '30%',
    marginLeft: '-105%',
    width: '250px',
    animation: 'moveCloudsOpposite 68s linear infinite',
    animationDelay: '200ms',
    opacity: 0.89,
  };

  const cloudStyle4: CSSProperties = {
    ...commonStyle,
    marginLeft: '105%',
    top: '55%',
    width: '234px',
    animation: 'moveClouds 80s linear infinite',
    animationDelay: '9s',
    opacity: 0.85,
  };

  const cloudStyle3: CSSProperties = {
    ...commonStyle,
    marginLeft: '105%',
    top: '80%',
    width: '200px',
    animation: 'moveClouds 89s linear infinite',
    opacity: 0.8,
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
      <Image
        src={cloud}
        alt="cloud"
        style={cloudStyle4}
        className="floating-cloud"
        priority={false}
      />
      <style jsx>{`
        @keyframes moveClouds {
          0% {
            margin-left: 100%;
          }
          100% {
            margin-left: -30%;
          }
        }
        @keyframes moveCloudsOpposite {
          0% {
            margin-left: -30%;
          }
          100% {
            margin-left: 100%;
          }
        }
      `}</style>
    </>
  );
}
