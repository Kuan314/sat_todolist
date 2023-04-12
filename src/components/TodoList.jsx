import React from "react";
import "../App.css";

const TodoList = () => {
  const data = [
    {
      task: "Eat",
      status: false,
    },
    {
      task: "Sleep",
      status: true,
    },
  ];

  return (
    <div className="Tasks">
      {data.map((value) => {
        return (
          <>
          <div className="Task">
            {value.task}
          </div>
          </>
        )
      })}
    </div>
  )
}

export default TodoList