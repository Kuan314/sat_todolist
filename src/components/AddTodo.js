import React from "react";

const AddTodo = () => {
  return (
    <div>
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