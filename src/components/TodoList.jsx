import React, { useState } from "react";
import "../App.css";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Data } from "../Data";

const TodoList = () => {

  const [datas, setDatas] = useState(Data);

  const handleChange = (index) => {
    const updateDatas = [...datas];
    updateDatas[index] = {...updateDatas[index], status: !updateDatas[index].status};
    setDatas(updateDatas);
  };

  return (
    <FormGroup className="Tasks">
      {datas.map((data, index) => {
        return (
          <FormControlLabel className = {`Task ${data.status ? "TaskDone" : ""}`} label = {data.task} sx = {{ margin: "5px 0" }} 
            control = {
              <Checkbox 
                checked = {data.status}
                onClick = {() => handleChange(index)}
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