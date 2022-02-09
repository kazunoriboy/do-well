import TaskBoard from "./TaskBoard";
import ProjectBoard from "./ProjectBoard";

const MainContaint: React.VFC = () => {
  return (
    <div className="p-mainContaint l-inner">
      <TaskBoard />
      <ProjectBoard />
    </div>
  );
};

export default MainContaint;
