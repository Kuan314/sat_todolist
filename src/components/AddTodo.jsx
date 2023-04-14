import React from "react";
import "../App.css";

const AddTodo = () => {
  return (
    <div>
      <label>Add to list</label>
      <form className="AddTodo">
        <input className="Input" type="text" />
        <button className="SubmitButton">
          +
        </button>
      </form>
    </div>
  )
}

export default AddTodo;