const Dashboard: React.VFC = () => {
  return (
    <div className="p-dashboard">
      <h5 className="c-dateText">Sunday, Feburaly 6</h5>
      <h2 className="c-dashboardMessage">Good evening</h2>
      <div className="c-stats">
        <select name="period" className="c-stats__period">
          <option value="weekly">My week</option>
          <option value="monthly">My month</option>
        </select>
        <div className="c-stats__completedTasks">0 tasks completed</div>
      </div>
    </div>
  )
}

export default Dashboard;
