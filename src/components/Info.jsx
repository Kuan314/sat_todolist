import React, { useState } from "react";
import "../App.css";
import ProgressBar from "./ProgressBar";
import TodoList from "./TodoList";
import { Data } from "../Data";

const Info = () => {

  const [data, setDatas] = useState(Data);

  const handleTaskChange = (index) => {
    const updateDatas = [...data];
    updateDatas[index] = {...updateDatas[index], status: !updateDatas[index].status};
    setDatas(updateDatas);
    console.log("Task changed");
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
        <TodoList data={data} onTaskChange={handleTaskChange} />
      </div>
    </div>
    </>
  )
}

export default Info;