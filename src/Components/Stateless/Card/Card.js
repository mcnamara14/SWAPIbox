import React, { Component } from 'react';
import './Card.css';

const Card = ({ data, id, findCard, selected }) => {
  const keys = Object.keys(data);
  return (
    <article className={selected ? "card favorite" : "card"}>

        { keys.map((key, index) => {
          if (key === 'name') {
            return (
            <div className="cardHeader">
              <h2>{data.name}</h2>      
              <div className="cardFave">
                <a href="#" className="favoriteIcon" onClick={() => findCard(data.id)}></a>
              </div>
            </div>
            )
          } else if (key === 'id' || key === 'favorite'){
            return null
          } else {
            return <p><span>{`${key}:`}</span> {data[key]}</p>
          }
            }
        )}
        <div className="cardBottom"></div>
    </article>
  )
};

export default Card;

