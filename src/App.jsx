import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Info from './components/Info';

const App = () => {
  return (
    <div className="App">
      <Info />
      <AddTodo />
    </div>
  );
}

export default App;
