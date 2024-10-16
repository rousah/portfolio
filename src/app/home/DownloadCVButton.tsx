import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';
import { Colors } from '@/app/types/colors';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const twFullConfig = resolveConfig(tailwindConfig);

export default function DonwloadCVButton() {
  const downloadCVText = 'Download CV!!!';
  const whiteShadow = `0px -5px 0px ${twFullConfig.theme.colors[Colors.white]}`;
  const pinkShadow = `0px -10px 0px ${twFullConfig.theme.colors[Colors.pink]}`;

  const doubleShadow = `${whiteShadow}, ${pinkShadow}`;
  const textShadow = {
    textShadow: doubleShadow,
  };

  const { basePath } = publicRuntimeConfig;
  const downloadLink = `${basePath}/cv/cv.pdf`;

  return (
    <a
      className="bg-yellow text-3xl text-black pt-5 pb-3 px-7"
      href={downloadLink}
      download="rosa_van_der_heide.pdf"
    >
      <span style={textShadow}>{downloadCVText}</span>
    </a>
  );
}
