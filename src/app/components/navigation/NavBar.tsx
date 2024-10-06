import Heading1 from '@/app/components/text/Heading1';
import Link from 'next/link';
import { Color } from '@/app/types/colors';

type Props = {
  color: Color;
};

export default function NavBar(props: Props) {
  const color = props.color;

  // TODO: download CV link
  // TODO: mobile view
  return (
    <nav className={`flex items-center justify-between flex-wrap bg-${color}`}>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded classNameborder-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
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
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 classNamehover:text-white"
          >
            Contact
          </Link>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
