import ProjectsList from '@/app/projects/ProjectsList';
import PageLayout from '@/app/components/page/PageLayout';

export default function Projects() {
  return (
    <PageLayout color="purple">
      <div className="min-w-full border-purple md:border-b-[3.5rem]">
        <div className="bg-white p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectsList></ProjectsList>
        </div>
      </div>
    </PageLayout>
  );
}
