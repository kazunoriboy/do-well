const TaskBoard: React.VFC = () => {
  return (
    <div className="p-taskBoard">
      <h3 className="p-taskBoard__title">My Priorities</h3>
      <ul className="p-taskStatusTab u-mt-1">
        <li className="p-taskStatusTab__item is-active">Upcoming</li>
        <li className="p-taskStatusTab__item">Overdue</li>
        <li className="p-taskStatusTab__item">Completed</li>
      </ul>
      <ul className="p-taskList">
        <li className="c-taskItem">
          LPIC学習<span className="c-taskItem__label">プライベート</span>
          <span className="c-taskItem__due">Tommorow</span>
        </li>
      </ul>
    </div>
  );
};

export default TaskBoard;
