import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Info from './components/Info';
import { Data } from './Data';

const App = () => {

  const [data, setDatas] = useState(Data);

  const handleTaskComplete = (index) => {
    const updateDatas = [...data];
    updateDatas[index] = {...updateDatas[index], status: !updateDatas[index].status};
    setDatas(updateDatas);
    console.log("Task changed");
  };

  return (
    <div className="App">
      <Info data={data} handleTaskComplete={handleTaskComplete} />
      <AddTodo data={data}/>
    </div>
  );
}

export default App;
