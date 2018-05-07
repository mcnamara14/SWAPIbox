import React, { Component } from 'react';
import ScrollingText from '../../Stateful/ScrollingText/ScrollingText';
import Header from '../../Stateful/Header/Header';
import Buttons from '../../Stateless/Buttons/Buttons';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      data: null
    }

    this.setData = this.setData.bind(this);
  }

  setData = (property) => {
    console.log(property)
    fetch(`https://swapi.co/api/${property}`)
      .then(response => response.json())
      .then(response => this.setState({data: response}))
      console.log(this.state.data)
  };

  render() {
    return (
      <div className="App">
        <ScrollingText />
        <Header />
        <Buttons setData={this.setData} />

      </div>
    );
  }
}

export default App;
