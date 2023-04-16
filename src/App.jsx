import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Info from './components/Info';
import { Data } from './Data';

const App = () => {

  // All sample data saved in here
  const [data, setData] = useState(Data);

  // Adding new task
  const handleTaskAdd = (task) => {
    const updatedData = [...data];
    updatedData.push(
      {
        task: task,
        status: false
      }
    )
    setData(updatedData);
  }

  // Mark selected task to complete
  const handleTaskComplete = (index) => {
    const updatedData = [...data];
    updatedData[index] = {...updatedData[index], status: !updatedData[index].status};
    setData(updatedData);
  };

  // Delete selected task
  const handleTaskDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData)
  }

  return (
    <div className="App">
      <Info data={data} handleTaskComplete={handleTaskComplete} handleTaskDelete={handleTaskDelete} />
      <AddTodo onTaskAdd={handleTaskAdd} />
    </div>
  );
}

export default App;
