import content from '@/app/about_me/content.json';
import aboutMeImage from '@/app/assets/about_me/about_me.png';
import Image from 'next/image';
import PageLayout from '@/app/components/page/PageLayout';

export default function AboutMe() {
  return (
    <PageLayout color="blue" noPaddingBottom>
      <div className="text-black grid lg:grid-cols-2 lg:gap-x-28 lg:px-14 min-h-80-screen lg:items-center">
        <div className="whitespace-pre-wrap font-lora lg:col-start-2 flex flex-col">
          {content.description}
          <br />
          <br />
          <a href="mailto:emiliarosavdh@gmail.com">emiliarosavdh@gmail.com</a>
        </div>
        <div className="lg:col-start-1 lg:row-start-1 lg:border-20 lg:border-solid border-yellow">
          <Image
            src={aboutMeImage}
            alt="placeholder"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </PageLayout>
  );
}
