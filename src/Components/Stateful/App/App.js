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

  setPeopleData = async (filter) => {
    const peopleData = await fetch(`https://swapi.co/api/${filter}`)
    const response = await peopleData.json()
    const results = await response.results
    console.log(results)
      // .then(response => response.json())
      // .then(response => console.log(response.results))
      // .then(data => 
      //   data.map(person => {
      //     fetch(person.homeworld)
      //       .then(response => response.json())
      //       .then(data => 
      //         this.setState({
      //           data: {
      //             name: person.name,
      //             homeworld: data.name
      //           }
      //         }))
      //   })
      // )
    
    // const peopleHomeworld = peopleData.map(world => {
    //    return null
    // });

    // this.setState({
    //   data: {
    //     homeworld: peopleHomeworld
    //   }
    // });

    // console.log(peopleData[0])
  }

  setData = (property) => {
    switch(property) {
      case 'people':
          this.setPeopleData('people')
          break;
      default:
          'reject'
    }
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
