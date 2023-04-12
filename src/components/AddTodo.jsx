import React from "react";
import "../App.css";

const AddTodo = () => {
  return (
    <div className="AddTodo">
      <label>Add to list</label>
      <form>
        <input className="Input" type="text" />
        <button className="SubmitButton">
          +
        </button>
      </form>
    </div>
  )
}

export default AddTodo;