import React, { Component } from 'react';
import './Card.css';

const Card = ({ data, filter }) => {
  console.log(data)
  if(data) {
  return (
    data.map((data, index) => {
      const keys = Object.keys(data);
        return (
          <article className="card">
            <a href="#" className="favorite"></a>
              { keys.map((key, index) => {
                 return key === 'name' ? <h2>{data.name}</h2> : <p>{data[key]}</p> 
                  }
              )}
          </article>
        )
        }))} else {
        return null
      }
}

export default Card;

