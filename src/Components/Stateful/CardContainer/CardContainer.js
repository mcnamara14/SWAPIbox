import React, { Component } from 'react';
import Card from '../../Stateless/Card/Card';
import Buttons from '../../Stateless/Buttons/Buttons';
import DataCleaner from '../../../DataCleaner';
import ScrollingText from '../../Stateful/ScrollingText/ScrollingText';
import './CardContainer.css';

const dataCleaner = new DataCleaner();

class CardContainer extends Component {
  constructor() {
    super();

    this.state = {
      filter: null,
      data: null,
      loading: true,
      favorites: [],
      favoriteCount: 0
    }

    this.displayFavorites = false;
    this.setData = this.setData.bind(this);
  }

    setData = async (filter) => {
        const data = await dataCleaner.fetchData(filter);
 
        this.setState({ data })
    }

    findCard = (id) => {
      const selectedCard = this.state.data.find(data => data.id === id);
      const duplicateFavorite = this.state.favorites.find(favorite => favorite.id === id)

      if(duplicateFavorite) {
        this.removeFavorite(selectedCard)
      } else {
        this.addFavorite(selectedCard)
      }
    }

    removeFavorite = (selectedCard) => {
      const favoriteCount = this.state.favoriteCount -= 1;
      const favorites = this.state.favorites;
      const index = favorites.findIndex(favorite => favorite.id === selectedCard.id);

      favorites.splice(index, 1)


      this.setState({ favorites, favoriteCount })
    }

    addFavorite = (selectedCard) => {
      const favoriteCount = this.state.favoriteCount += 1;
      const favorites = [...this.state.favorites, selectedCard]

      this.setState({ favorites, favoriteCount });
    };

    toggleDisplayFavorites = () => {
      this.setState({ data: this.state.favorites })
    }

    render() {
      if(this.state.data) {
        const cards = this.state.data.map((eachData, index) => {
          const selected = this.state.favorites.find(favorite => favorite.id === eachData.id);
          return <Card data={eachData} key={index} findCard={this.findCard} selected={selected} />
        });

        return (
          <section className="cardContainer">
            <Buttons setData={this.setData} favoriteCount={this.state.favoriteCount} toggleDisplayFavorites={this.toggleDisplayFavorites} />
            <section className="cards">
                <div>
                {cards}
                </div>
            </section>
          </section>
        )
    } else {
        return (
          <div>
             <Buttons setData={this.setData} favoriteCount={this.state.favoriteCount} toggleDisplayFavorites={this.toggleDisplayFavorites} />
            <ScrollingText />
          </div>
        )
    }
  }
}

export default CardContainer;
