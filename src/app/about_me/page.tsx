import Heading1 from '@/app/components/text/Heading1';
import content from '@/app/about_me/content.json';
import aboutMeImage from '@/app/assets/about_me/about_me.png';
import Image from 'next/image';
import PageLayout from '@/app/components/page/PageLayout';

export default function AboutMe() {
  // TODO: improve description
  // TODO: make email clickable
  return (
    <PageLayout color="blue">
      <div className="text-black grid md:grid-cols-2 md:gap-x-28 px-14 min-h-80-screen md:items-center">
        <div className="whitespace-pre-wrap font-lora md:col-start-2 flex items-center">
          {content.description}
          <br />
          <br />
          emiliarosavdh@gmail.com
        </div>
        <div className="md:col-start-1 md:row-start-1 md:border-20 md:border-solid border-yellow">
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
