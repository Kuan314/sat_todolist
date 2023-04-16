import React, { useEffect, useRef } from "react";
import "../App.css";
import { FormGroup, FormControlLabel, Checkbox, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

/**
 * Render todo list
 * 
 * @param {Object[]} data
 * @param {string} data.task
 * @param {boolean} data.status
 */
const TodoList = ({data, onTaskComplete, onTaskDelete, ShowCompletedLast}) => {
  
  // Past index of completed task
  const handleComplete = (index) => {
    onTaskComplete(index);
  }

  // Past index of deleted task
  const handleDelete = (index) => {
    onTaskDelete(index);
  }

  const containerRef = useRef(null);

  // Scroll to added task
  useEffect(() => {
    if(containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [data])

  // Show sorted data or default data
  const showData = ShowCompletedLast 
    ? [...data].sort((a, b) => a.status - b.status) 
    : [...data]; 

  return (
    <FormGroup className="Tasks" sx={{ flexWrap: "nowrap", overflowY: "scroll" }} ref={containerRef}>
      {showData.map((data, index) => {
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