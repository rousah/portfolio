import Heading1 from '@/app/components/text/Heading1';
import content from '@/app/about_me/content.json';

export default function AboutMe() {
  return (
    <main className="bg-blue min-w-full min-h-full text-black">
      <div className="h-screen p-8 md:p-14 pt-0 md:pt-0">
        <Heading1>About me</Heading1>
        <div className="whitespace-pre-wrap font-lora">
          {content.description}
        </div>
        <div>
          <img></img>
        </div>
      </div>
    </main>
  );
}
