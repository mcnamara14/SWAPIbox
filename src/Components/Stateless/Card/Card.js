import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor ({ data, filter }) {
    super();
  }

  render() {
    switch(this.props.filter) {
      case 'people':
      return (
        <article className="card">
          <h2></h2>
          <h3></h3>
          <h3></h3>
        </article>
      );
      break;
        default:
        return null;
    }
  }
}

export default Card;
