import React from "react";
import "../App.css";
import ProgressBar from "./ProgressBar";
import TodoList from "./TodoList";

const Info = ({data, handleTaskComplete}) => {

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
        <TodoList data={data} onTaskComplete={handleTaskComplete} />
      </div>
    </div>
    </>
  )
}

export default Info;