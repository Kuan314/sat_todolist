import React from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <div className="App">
      <div className="Header">
        <div className="Title">
          Todo List
        </div>
        <div className="Description">
          Add things to do
        </div>
      </div>
      <div className="Info">
        <ProgressBar />
        <Todo />
      </div>
      <div className="AddTodo">
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
