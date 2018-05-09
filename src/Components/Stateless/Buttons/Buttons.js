import React, { Component } from 'react';
import DataCleaner from '../../../DataCleaner'
import './Buttons.css';

const dataCleaner = new DataCleaner();

class Buttons extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section className="filterButtons">
        <button className="people" onClick={() => this.props.setData('people')} >people</button>
        <button className="planets" onClick={() => this.props.setData('planets')} >planets</button>
        <button className="vehicles" onClick={() => dataCleaner.fetchData('vehicles')} >vehicles</button>
      </section>
    );
  }
}

export default Buttons;
