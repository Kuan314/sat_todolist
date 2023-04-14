import React from "react";
import "../App.css";
import { FormGroup, FormControlLabel, Checkbox, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const TodoList = ({data, onTaskComplete, onTaskDelete}) => {
  const handleComplete = (index) => {
    onTaskComplete(index);
  }

  const handleDelete = (index) => {
    onTaskDelete(index);
  }

  return (
    <FormGroup className="Tasks" sx={{ flexWrap: "nowrap", overflowY: "scroll" }}>
      {data.map((data, index) => {
        return (
          <>
          <div className={`Task ${data.status ? "TaskDone" : ""}`}>
            <FormControlLabel label={data.task}
              sx={{ margin: "5px 0" }}
              control=
              {<Checkbox
                checked={data.status}
                onClick={() => handleComplete(index)}
                name={data.task} 
              />} 
            />
            
            <IconButton onClick={() => handleDelete(index)}>
              <CloseIcon />
            </IconButton>
          </div>
          </>
        )
      })}
    </FormGroup>
  )
}

export default TodoList