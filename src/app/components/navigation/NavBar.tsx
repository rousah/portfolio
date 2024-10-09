'use client';

import Link from 'next/link';
import { Color } from '@/app/types/colors';
import { useState } from 'react';

type Props = {
  color: Color;
};

export default function NavBar(props: Props) {
  const color = props.color;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // TODO: download CV link
  // TODO: mobile view
  return (
    <nav className={`flex items-center justify-between flex-wrap bg-${color}`}>
      <div className="block lg:hidden">
        <button
          className="flex items-center rounded hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto text-sm  ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 classNamehover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="block mt-4 lg:inline-block lg:mt-0 classNamehover:text-white mr-4"
          >
            Projects
          </Link>
          <Link
            href="/about_me"
            className="block mt-4 lg:inline-block lg:mt-0 classNamehover:text-white mr-4"
          >
            About me
          </Link>
          <Link
            href="/#contact"
            className="block mt-4 lg:inline-block lg:mt-0 classNamehover:text-white"
          >
            Contact
          </Link>
        </div>
        <div className="mt-4 mb-2 lg:my-0">
          <a href="#">Download CV</a>
        </div>
      </div>
    </nav>
  );
}
