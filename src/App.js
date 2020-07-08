import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import AddCategory from './components/AddCategory';

function App() {
  return (
    <div className="App container">
      Hello
      <div className="row" style={{ padding: 10, border: "solid 1px gray" }}>
        <div className="col">
          <HomePage />
        </div>
        <div className="col">
          <AddCategory />
        </div>
      </div>

    </div>
  );
}

export default App;
