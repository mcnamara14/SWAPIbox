import React, { Component } from 'react';
import ScrollingText from '../../Stateful/ScrollingText/ScrollingText';
import Header from '../../Stateful/Header/Header';
import Buttons from '../../Stateless/Buttons/Buttons';
import CardContainer from '../../Stateless/CardContainer/CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      filter: null,
      data: null,
      favorites: []
    }

    this.setData = this.setData.bind(this);
  }

  setData = (property) => {
    fetch(`https://swapi.co/api/${property}`)
      .then(response => response.json())
      .then(response => this.setState({data: response, filter: property}))
  };

  render() {
    return (
      <div className="App">
        <ScrollingText />
        <Header />
        <Buttons setData={this.setData} />
        <CardContainer data={this.state.data} filter={this.state.filter}  />
      </div>
    );
  }
}

export default App;
