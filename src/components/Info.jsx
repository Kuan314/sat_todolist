import React from "react";
import "../App.css";
import ProgressBar from "./ProgressBar";
import TodoList from "./TodoList";

const Info = ({data, handleTaskComplete, handleTaskDelete}) => {

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
        <TodoList data={data} onTaskComplete={handleTaskComplete} onTaskDelete={handleTaskDelete} />
      </div>
    </div>
    </>
  )
}

export default Info;