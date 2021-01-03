import React from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Routes from './Router/Routes'
import Header from './Components/Header/Header'
import Homepage from './Views/Homepage'

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
