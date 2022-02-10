import TaskBoard from './TaskBoard';
import ProjectBoard from './ProjectBoard';

const MainContaint: React.VFC = () => {
  return (
    <div className="p-mainContaint f-inner">
      <TaskBoard />
      <ProjectBoard />
    </div>
  );
};

export default MainContaint;
