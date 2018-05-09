import React, { Component } from 'react';
import './Card.css';

const Card = ({ data, filter }) => {

 if(filter === 'people') {
  return (
   data.map(data => {
      return (
        <article className="card">
          <h1>{data.name}</h1>
          <h2>{data.homeworld}</h2>
          <h2>{data.species}</h2>
          <h2>{data.population}</h2>
        </article>
      )
    })
  )
 } else {
   return null
 }

}

export default Card;

