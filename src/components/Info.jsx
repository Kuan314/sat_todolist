import React from "react";
import "../App.css";
import ProgressBar from "./ProgressBar";
import Todo from "./Todo";

const Info = () => {
  return (
    <div className="Info">
      <ProgressBar />
      <Todo />
    </div>
  )
}

export default Info;