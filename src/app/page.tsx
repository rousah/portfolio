import Sections from '@/app/home/sections';

export default function Home() {
  const shadowTexture = {
    boxShadow:
      'inset 0px 0px 56px 0px #9681B8, inset 50px -90px 90px 0px #FAF796, inset 26px 19px 100px 36px #75ABDB',
    backgroundBlendMode: 'multiply',
    background: `
      radial-gradient(circle at center,
        #9681B8 7%,
        #FAF796 50%,
        #75ABDB 100%)
    `,
    overflow: 'hidden',
  };

  return (
    <main className="bg-green min-w-full min-h-full">
      <div className="h-screen p-8 md:p-14 pt-0 md:pt-0 grid grid-rows-[auto_1fr]">
        <div className="h-14 sticky top-0 bg-green"></div>
        <div style={shadowTexture} className="w-full h-full"></div>
      </div>
      <div className="p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        <Sections></Sections>
      </div>
    </main>
  );
}
