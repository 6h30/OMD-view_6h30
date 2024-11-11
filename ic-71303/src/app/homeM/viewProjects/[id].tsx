// pages/viewProject/[id].tsx
import { useRouter } from 'next/router';
import ViewProjects from '@/components/omd_ViewProjects';

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;  // Lấy id từ URL query

  return (
    <div className="flex h-full w-full items-start justify-center border overflow-y-auto scroll-smooth">
      <div className="font-koho md:w-[820px] sm:w-[420px] h-[800px]">
        {/* Truyền id vào ViewProjects */}
        <ViewProjects projectId={id} />
      </div>
    </div>
  );
};

export default ProjectPage;
