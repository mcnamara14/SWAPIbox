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

    findCard = (id) => {
      const selectedCard = this.state.data.find(data => data.id === id)
      this.changeFavorites(selectedCard)
    }

    changeFavorites = (selectedCard) => {
      const currentFavorites = this.state.favorites;
      currentFavorites.push(selectedCard)
      this.setState({favorites: currentFavorites})
    }

    render() {
      if(this.state.data) {
        const cards = this.state.data.map((eachData, index) => {
          return <Card data={eachData} key={index} findCard={this.findCard} />
        });

        return (
          <section className="cardContainer">
            <Buttons setData={this.setData} />
            <section className="cards">
              {cards}
            </section>
          </section>
        )
    } else {
        return (
          <section className="cardContainer">
            <Buttons setData={this.setData} />
        </section>
        )
    }
  }
}

export default CardContainer;
