import React, { Component } from 'react';
import './Card.css';

const Card = ({ data, filter }) => {

  if(filter === 'people') {
    return (
      <article className="card">
        <h1>{data.results[0].name}</h1>
      </article>
    );
  } else {
    return null
  }
}

export default Card;
