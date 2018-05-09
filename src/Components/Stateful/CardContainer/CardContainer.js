import React, { Component } from 'react';
import Card from '../../Stateless/Card/Card';
import Buttons from '../../Stateless/Buttons/Buttons';
import DataCleaner from '../../../DataCleaner';
import './CardContainer.css';

const dataCleaner = new DataCleaner();

class CardContainer extends Component {
  constructor() {
    super();

    this.state = {
      filter: null,
      data: null,
      favorites: [], 
      loading: true
    }

    this.setData = this.setData.bind(this);
  }

  setData = async (filter) => {
    const data = await dataCleaner.fetchData(filter)
    this.setState({ filter, data })
  }
    render() {
      return (
        <section className="cardContainer">
          <Buttons setData={this.setData} />
          <section className="cards">
            <Card data={this.state.data} filter={this.state.filter} />
          </section>
        </section>
    )
  }
}

export default CardContainer;
