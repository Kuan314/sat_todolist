import React, { useState } from "react";
import "../App.css";
import ProgressBar from "./ProgressBar";
import TodoList from "./TodoList";
import ShowCompletedLastController from "./ShowCompletedLastController";

const Info = ({ data, handleTaskComplete, handleTaskDelete }) => {
  const [showCompletedLast, setShowCompleteLast] = useState(false);
  
  const handleShowCompletedLast = () => {
    setShowCompleteLast(!showCompletedLast);
  };

  return (
    <>
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
        <TodoList data={data} onTaskComplete={handleTaskComplete} onTaskDelete={handleTaskDelete} ShowCompletedLast={showCompletedLast}/>
      </div>
      <ShowCompletedLastController showCompletedLast={showCompletedLast} handleShowCompletedLast={handleShowCompletedLast}/>
    </div>
    </>
  )
}

export default Info;