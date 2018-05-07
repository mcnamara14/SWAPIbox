import React from 'react';
import Card from '../../Stateless/Card/Card';
import './CardContainer.css';

const CardContainer = ({ data, filter }) => {

    return (
      <article className="CardContainer">
        <Card data={data} filter={filter} />
      </article>
    )
}

export default CardContainer;
