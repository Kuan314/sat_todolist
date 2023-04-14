import React, { useState, useEffect } from "react";
import "../App.css";

const ProgressBar = ({ data }) => {
  const totalTasks = data.length;
  const [completeTasks, setCompleteTasks] = useState(0);

  useEffect(() => {
    const completedTasks = data.filter((task) => task.status).length;
    setCompleteTasks(completedTasks);
  }, [data]);

  const completePercent = (completeTasks / totalTasks) * 100;

  return (
    <div className="ShowProgress">
      {completePercent}%
      <div className="ProgressBar">
        <div className="DoneProgress" style={{ width: `${completePercent}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar;