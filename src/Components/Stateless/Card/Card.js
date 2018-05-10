import React, { Component } from 'react';
import './Card.css';

const Card = ({ data, id, findCard }) => {
  const keys = Object.keys(data);
  return (
    <article className="card">
      <a href="#" className="favorite" onClick={() => findCard(data.id)}></a>
        { keys.map((key, index) => {
          if (key === 'name') {
            return <h2>{data.name}</h2>
          } else if (key === 'id'){
            return null
          } else {
            return <p>{`${key}: ${data[key]}`}</p>
          }
            }
        )}
    </article>
  )
};

export default Card;

