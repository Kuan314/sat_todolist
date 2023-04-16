import React, { useState } from "react";
import "../App.css";
import ProgressBar from "./ProgressBar";
import TodoList from "./TodoList";
import ShowCompletedLastController from "./ShowCompletedLastController";

/**
 * Return these components
 * ProgressBar - Show how much percent of things done
 * TodoList - Show the tasks
 * ShowCompletedLastController - Will sort the done task to bottom when on
 * 
 * @param {Object[]} data
 * @param {string} data.task
 * @param {boolean} data.status
 */
const Info = ({ data, handleTaskComplete, handleTaskDelete, checkAddingTask, setCheckAddingTask }) => {

  // Save the status of showCompletedLast button
  const [showCompletedLast, setShowCompleteLast] = useState(false);
  
  // After clicked button
  // Set showCompleteLast to opposite state
  const handleShowCompletedLast = () => {
    setShowCompleteLast(!showCompletedLast);
  };

  return (
    <div className="Info">
      <div className="Header">
        <div className="Title">
          Todo List
        </div>
        <div className="Description">
          Add things to do
        </div>
      </div>
      <div className="TodoList">
        <ProgressBar data={data}/>
        <TodoList 
          data={data} 
          onTaskComplete={handleTaskComplete} 
          onTaskDelete={handleTaskDelete} 
          ShowCompletedLast={showCompletedLast} 
          checkAddingTask={checkAddingTask}
          setCheckAddingTask={setCheckAddingTask}
        />
      </div>
      <ShowCompletedLastController showCompletedLast={showCompletedLast} handleShowCompletedLast={handleShowCompletedLast}/>
    </div>
  )
}

export default Info;