import ProjectsList from '@/app/projects/ProjectsList';
import PageLayout from '@/app/components/page/PageLayout';

export default function Projects() {
  return (
    <PageLayout color="purple">
      <div className="min-w-full">
        <div className="bg-white p-4 md:p-10 grid md:grid-cols-3 gap-6">
          <ProjectsList></ProjectsList>
        </div>
      </div>
    </PageLayout>
  );
}
