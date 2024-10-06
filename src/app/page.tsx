import Sections from '@/app/home/Sections';
import DownloadCVButton from '@/app/home/DownloadCVButton';
import NavBar from '@/app/components/navigation/NavBar';

export default function Home() {
  const shadowTexture = {
    boxShadow:
      'inset 0px 0px 56px 0px #9681B8, inset 50px -90px 90px 0px #FAF796, inset 26px 19px 100px 36px #75ABDB',
    background:
      'linear-gradient(to bottom right, #9681B8 0%, #FAF796 25%, #75ABDB 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #9681B8 0%, #FAF796 25%, #75ABDB 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #9681B8 0%, #FAF796 25%, #75ABDB 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #9681B8 0%, #FAF796 25%, #75ABDB 50%) top right / 50% 50% no-repeat',
    overflow: 'hidden',
  };

  return (
    <main className="bg-green min-w-full min-h-full">
      <NavBar color="green"></NavBar>
      <div className="h-screen p-8 md:p-14 pt-0 md:pt-0 grid grid-rows-[auto_1fr]">
        <div className="h-14 sticky top-0 bg-green"></div>
        <div style={shadowTexture} className="w-full h-full"></div>
      </div>
      <div className="p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        <Sections></Sections>
      </div>
      <div className="flex justify-center">
        <DownloadCVButton></DownloadCVButton>
      </div>
    </main>
  );
}
