import React, { Component } from 'react';
import CardContainer from '../../Stateful/CardContainer/CardContainer';
import Header from '../../Stateless/Header/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;
