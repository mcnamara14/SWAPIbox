import React, { Component } from 'react';
import ScrollingText from '../../Stateful/ScrollingText/ScrollingText';
import Header from '../../Stateful/Header/Header';
import CardContainer from '../../Stateful/CardContainer/CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <ScrollingText />
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;
