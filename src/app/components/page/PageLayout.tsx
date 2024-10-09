import NavBar from '@/app/components/navigation/NavBar';
import { Color } from '@/app/types/colors';

type Props = {
  color: Color;
  children: React.ReactNode;
  noPaddingBottom?: boolean;
};

export default function PageLayout(props: Props) {
  const color = props.color;
  const paddingBottom = props.noPaddingBottom ? 'pb-0' : 'pb-8';

  return (
    <div className={`bg-${color} min-w-full min-h-dvh`}>
      <div
        className={`sticky top-0 w-full p-8 py-2 md:p-14 bg-${color} md:py-4 z-50`}
      >
        <NavBar color={color}></NavBar>
      </div>
      <main className={`min-w-full p-8 pt-0 md:px-14 md:py-0 ${paddingBottom}`}>
        {props.children}
      </main>
    </div>
  );
}
