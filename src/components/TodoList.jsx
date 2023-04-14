import React from "react";
import "../App.css";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const TodoList = ({data, onTaskComplete}) => {
  const handleComplete = (index) => {
    onTaskComplete(index);
  }

  return (
    <FormGroup className="Tasks" sx={{ flexWrap: "nowrap", overflowY: "scroll" }}>
      {data.map((data, index) => {
        return (
          <FormControlLabel className = {`Task ${data.status ? "TaskDone" : ""}`} label = {data.task}
            sx = {{ margin: "5px 0" }} 
            control = {
              <Checkbox 
                checked = {data.status}
                onClick = {() => handleComplete(index)}
                name = {data.task}
              />
            }
          />
        )
      })}
    </FormGroup>
  )
}

export default TodoList