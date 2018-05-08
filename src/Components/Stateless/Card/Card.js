import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor ({ data, filter }) {
    super();

    this.state = {
      people: null
    }
  }

  makeApiCall = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({homeworld: response.name}))

  }

  render() {
    switch(this.props.filter) {
      case 'people':
      return (
        <article className="card">
          <h2>{this.props.data[0].name}</h2>
          <h3>{this.state.homeworld}</h3>
          <h3>{this.props.data[0].species}</h3>
        </article>
      );
      break;
        default:
        return null;
    }
  }
}

export default Card;
