import React from "react";
import "../App.css";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const TodoList = () => {

  const handleChange = (index) => {
  };

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
    <FormGroup className="Tasks">
      {data.map((value, index) => {
        return (
          <FormControlLabel className={`Task ${value.status ? "TaskDone" : ""}`} label={value.task} sx={{ margin: "5px 0"  }} 
            control={
              <Checkbox 
                checked={value.status}
                onChange={handleChange(index)}
              />
            }
          />
        )
      })}
    </FormGroup>
  )
}

export default TodoList