import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ data, findCard, selected }) => {
  const keys = Object.keys(data);
  return (
    <article className={selected ? "card favorite" : "card"}>
      { keys.map((key, index) => {
        if (key === 'name') {
          return (
            <div className="cardHeader" key={index}>
              <h2>{data.name}</h2>      
              <div className="cardFave">
                <a className="favoriteIcon" onClick={() => 
                  findCard(data.id)}></a>
              </div>
            </div>
          );
        } else if (key === 'id' || key === 'favorite'){
          return null;
        } else {
          return <p><span>{`${key}:`}</span> {data[key]}</p>;
        }
      }
      )}
      <div className="cardBottom"></div>
    </article>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  id: PropTypes.string,
  findCard: PropTypes.func,
  selected: PropTypes.object
};

export default Card;

