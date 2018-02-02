import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Learncompo from './learn-compo/learn-compo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id='app'></div>
        <Learncompo name='Name form App.js'/>
      </div>
        
    );
  }
}

export default App;
