import Sections from '@/app/home/Sections';
import DownloadCVButton from '@/app/home/DownloadCVButton';
import PageLayout from '@/app/components/page/PageLayout';

export default function Home() {
  const shadowTexture = {
    boxShadow:
      'inset 0px 0px 56px 0px #9681B8, inset 50px -90px 90px 0px #FAF796, inset 26px 19px 100px 36px #75ABDB',
    background:
      'linear-gradient(to bottom right, #9681B8 0%, #FAF796 25%, #75ABDB 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #9681B8 0%, #FAF796 25%, #75ABDB 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #9681B8 0%, #FAF796 25%, #75ABDB 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #9681B8 0%, #FAF796 25%, #75ABDB 50%) top right / 50% 50% no-repeat',
    overflow: 'hidden',
  };

  return (
    <PageLayout color="green">
      <div className="h-dvh pb-8 md:pb-14">
        <div style={shadowTexture} className="w-full h-full"></div>
      </div>
      <div className="min-h-dvh pb-5">
        <div className="md:pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 mb-24 gap-y-8 lg:gap-y-0">
          <Sections></Sections>
        </div>
        <div className="flex justify-center">
          <DownloadCVButton></DownloadCVButton>
        </div>
      </div>
    </PageLayout>
  );
}
