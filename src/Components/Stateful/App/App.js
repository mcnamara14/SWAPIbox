import React, { Component } from 'react';
import ScrollingText from '../../Stateful/ScrollingText/ScrollingText';
import Header from '../../Stateful/Header/Header';
import Buttons from '../../Stateless/Buttons/Buttons';
import DataCleaner from '../../../DataCleaner';
import CardContainer from '../../Stateless/CardContainer/CardContainer';
import './App.css';

const dataCleaner = new DataCleaner();

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

  setData = async (filter) => {
    const data = await dataCleaner.fetchData(filter)
    this.setState({ data })

  }

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
