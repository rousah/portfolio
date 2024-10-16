import React from 'react';
import project from '@/app/assets/home/sections/projects.webp';
import aboutMe from '@/app/assets/home/sections/about_me.webp';
import Polaroid from '@/app/home/Polaroid';
import Contact from '@/app/home/Contact';
import { Colors } from '@/app/types/colors';

export default function Sections() {
  const sections = [
    {
      title: 'Projects',
      image: project,
      color: Colors.purple,
      href: '/projects',
      id: 0,
    },
    {
      title: 'About me',
      image: aboutMe,
      color: Colors.blue,
      href: '/about_me',
      id: 1,
    },
  ];

  return (
    <>
      {sections.map((section) => (
        <Polaroid
          title={section.title}
          image={section.image}
          color={section.color}
          href={section.href}
          key={section.id}
        ></Polaroid>
      ))}
      <Contact></Contact>
    </>
  );
}
