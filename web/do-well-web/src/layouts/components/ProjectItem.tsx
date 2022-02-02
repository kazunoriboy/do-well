type Props = {
  id: number;
  title: string;
  color: string;
}

const ProjectItem: React.FC<Props> = (project) => {
  return (
    <li className="p-projectsList__item">
      <a href="#" className="p-projectsList__link">
        <span className={"c-tagBullet--" + project.color}></span>{project.title}
      </a>
    </li>
  );
}

export default ProjectItem;
