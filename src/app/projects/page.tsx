import Heading1 from '@/app/components/text/Heading1';
import ProjectsList from '@/app/projects/ProjectsList';

// TODO: add real data
export default function Projects() {
  // TODO: open expansion when clicking card
  const borderClassNames = 'border-green border-solid border-3';

  return (
    <main className="bg-purple min-w-full min-h-full">
      <div className="min-h-screen p-8 md:p-14 pt-0 md:pt-0 pb-0">
        <Heading1>Projects</Heading1>
        <div className="bg-white p-10">
          <ProjectsList></ProjectsList>
        </div>
      </div>
    </main>
  );
}
