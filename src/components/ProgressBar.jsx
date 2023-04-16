import React, { useState, useEffect } from "react";
import "../App.css";

/**
 * Return progress bar of tasks
 * 
 * @param {Object[]} data
 * @param {string} data.task
 * @param {boolean} data.status
 */
const ProgressBar = ({ data }) => {
  const totalTasks = data.length;
  const [completeTasks, setCompleteTasks] = useState(0);

  // Count the completed tasks when adding task or changing task's status
  useEffect(() => {
    const completedTasks = data.filter((task) => task.status).length;
    setCompleteTasks(completedTasks);
  }, [data]);

  // Count completed task percentage and floor to integer
  const completePercent = Math.floor((completeTasks / totalTasks) * 100);

  return (
    <div className="ShowProgress">
      {completePercent}%
      <div className="ProgressBar">
        {/* Render the percent of completed task */}
        <div className="DoneProgress" style={{ width: `${completePercent}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar;