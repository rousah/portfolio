import NavBar from '@/app/components/navigation/NavBar';
import { Color } from '@/app/types/colors';

type Props = {
  color: Color;
  children: React.ReactNode;
};

export default function PageLayout(props: Props) {
  const color = props.color;

  return (
    <>
      <div className={`fixed w-full p-8 md:p-14 bg-${color} md:py-4`}>
        <NavBar color={color}></NavBar>
      </div>
      <main
        className={`bg-${color} min-w-full min-h-full p-8 pt-0 md:px-14 md:py-0`}
      >
        <div className="min-h-screen">{props.children}</div>
      </main>
    </>
  );
}
