import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Info from './components/Info';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Info />
      <AddTodo />
    </div>
  );
}

export default App;
