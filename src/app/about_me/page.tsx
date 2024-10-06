import Heading1 from '@/app/components/text/Heading1';
import content from '@/app/about_me/content.json';
import aboutMeImage from '@/app/assets/about_me/about_me.png';
import Image from 'next/image';

export default function AboutMe() {
  // TODO: improve description
  // TODO: make email clickable
  return (
    <main className="bg-blue min-w-full min-h-full text-black">
      <div className="min-h-screen p-8 md:p-14 pt-0 md:pt-0 pb-0">
        <Heading1>About me</Heading1>
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
    </main>
  );
}
