import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Main.scss'
import SingleLineGridList from './Components/UserCard';
import Header from './Components/header';

function App() {
  return (
    <div className="App">
      <Header></Header><br/><br/>
      <div className="horizontal-scroll-wrapper squares">
        <div><SingleLineGridList/></div>
        <div><SingleLineGridList/></div>
        <div><SingleLineGridList/></div>
        <div><SingleLineGridList/></div>
        <div><SingleLineGridList/></div>
        <div><SingleLineGridList/></div>
        <div><SingleLineGridList/></div>
        <div><SingleLineGridList/></div>
      </div>
    </div>
  );  
}

export default App;
