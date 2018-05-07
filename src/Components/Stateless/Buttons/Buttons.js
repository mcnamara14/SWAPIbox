import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <section className="filterButtons">
        <button className="people" onClick={() => this.props.setData('people')} >people</button>
        <button className="planets" onClick={() => this.props.setData('planets')} >planets</button>
        <button className="vehicles" onClick={() => this.props.setData('vehicles')} >vehicles</button>
      </section>
    );
  }
}

export default Buttons;
