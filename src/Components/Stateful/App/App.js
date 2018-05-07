import React, { Component } from 'react';
import ScrollingText from '../../Stateful/ScrollingText/ScrollingText';
import Header from '../../Stateful/Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollingText />
        <Header />
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">SWAPIbox</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/Components/App/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
