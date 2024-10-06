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
      <div className="min-h-screen text-black">
        <div className="whitespace-pre-wrap font-lora">
          {content.description}
          <br />
          <br />
          emiliarosavdh@gmail.com
        </div>
        <div>
          <Image
            src={aboutMeImage}
            alt="placeholder"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </PageLayout>
  );
}
