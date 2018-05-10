import React, { Component } from 'react';
import './Card.css';

const Card = ({ data, id, findCard }) => {
  const keys = Object.keys(data);
  return (
    <article className={data.favorite ? "card favorite" : "card"}>
      <a href="#" className="favoriteIcon" onClick={() => findCard(data.id)}></a>
        { keys.map((key, index) => {
          if (key === 'name') {
            return <h2>{data.name}</h2>
          } else if (key === 'id' || key === 'favorite'){
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

