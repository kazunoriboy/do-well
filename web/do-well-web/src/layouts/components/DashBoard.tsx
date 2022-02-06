const DashBoard: React.VFC = () => {
  return (
    <div className="p-dashBoard">
      <h5 className="c-dateText">Sunday, Feburaly 6</h5>
      <h2 className="c-dashBoardMessage">Good evening</h2>
      <div className="c-stats">
        <select name="period" id="" className="c-stats__period">
          <option value="weekly">My week</option>
          <option value="monthly">My month</option>
        </select>
        <div className="c-stats__completedTasks">0 tasks completed</div>
      </div>
    </div>
  )
}

export default DashBoard;
