import React from 'react';
import project from '../assets/sections/projects.png';
import aboutMe from '../assets/sections/about_me.png';
import Polaroid from '@/app/home/polaroid';
import Contact from '@/app/home/contact';
import { Colors } from '@/app/types/colors';

export default function Sections() {
  const sections = [
    {
      title: 'Projects',
      image: project,
      color: Colors.purple,
    },
    {
      title: 'About me',
      image: aboutMe,
      color: Colors.blue,
    },
  ];

  return (
    <>
      {sections.map((section) => (
        <Polaroid
          title={section.title}
          image={section.image}
          color={section.color}
        ></Polaroid>
      ))}
      <Contact></Contact>
    </>
  );
}
