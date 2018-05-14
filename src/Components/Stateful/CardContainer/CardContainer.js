import React, { Component } from 'react';
import Card from '../../Stateless/Card/Card';
import Buttons from '../../Stateless/Buttons/Buttons';
import DataCleaner from '../../../DataCleaner/DataCleaner';
import Loading from '../../Stateless/Loading/Loading';
import AddFavorites from '../../Stateless/AddFavorites/AddFavorites';
import ScrollingText from '../../Stateful/ScrollingText/ScrollingText';
import './CardContainer.css';

const dataCleaner = new DataCleaner();

class CardContainer extends Component {
  constructor() {
    super();

    this.state = {
      filter: '',
      data: {},
      renderState: 'crawl',
      favorites: [],
      favoriteCount: 0
    };

    this.displayFavorites = false;
    this.setData = this.setData.bind(this);
  }

    setData = async (filter) => {
      this.setState({ renderState: 'loading' });
      const data = await dataCleaner.fetchData(filter);
      this.setState({ data, renderState: 'cards' });
    }

    findCard = (id) => {
      const selectedCard = this.state.data.find(data => data.id === id);
      const duplicateFavorite = this.state.favorites
        .find(favorite => favorite.id === id);

      if (duplicateFavorite) {
        this.removeFavorite(selectedCard);
      } else {
        this.addFavorite(selectedCard);
      }
    }

    removeFavorite = (selectedCard) => {
      let updatedFavoriteCount = this.state.favoriteCount;
      let favoriteCount = updatedFavoriteCount -= 1;
      const favorites = this.state.favorites;
      const index = favorites
        .findIndex(favorite => favorite.id === selectedCard.id);

      favorites.splice(index, 1);

      this.setState({ favorites, favoriteCount });
    }

    addFavorite = (selectedCard) => {
      let updatedFavoriteCount = this.state.favoriteCount;
      let favoriteCount = updatedFavoriteCount += 1;
      const favorites = [...this.state.favorites, selectedCard];

      this.setState({ favorites, favoriteCount });
    };

    toggleDisplayFavorites = () => {
      this.setState({ data: this.state.favorites });
    }

    toggleAddFavorites = () => {
      this.setState({ renderState: 'addFavorites' })
    }

    getCards = () => {
      const cards = this.state.data.map((eachData, index) => {
        const selected = this.state.favorites
          .find(favorite => favorite.id === eachData.id);

        return <Card data={eachData} key={index} 
          findCard={this.findCard} selected={selected} />;
      });

      return cards;
    }

    toggleRender = () => {
      switch (this.state.renderState) {
        case 'crawl':
          return <ScrollingText />;
        case 'cards':
          return <section className="cards">
            <div>
              {this.getCards()}
            </div>
          </section>;
        case 'loading':
          return <div><Loading /></div>;
        case 'addFavorites': 
          return <AddFavorites />
      }
    }

    render() {
      return (
        <section className="cardContainer">
          <Buttons setData={this.setData} 
            favoriteCount={this.state.favoriteCount} 
            toggleDisplayFavorites={this.toggleDisplayFavorites} 
            toggleAddFavorites={this.toggleAddFavorites} />
          { this.toggleRender() }
        </section>
      );
    }
}

export default CardContainer;
