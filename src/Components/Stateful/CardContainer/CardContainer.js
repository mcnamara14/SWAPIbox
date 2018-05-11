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
      loading: true,
      favorites: [], 
      favoriteCount: 0
    }

    this.displayFavorites = false;
    this.setData = this.setData.bind(this);
  }

    componentDidMount = () => {
      if(localStorage.length) {
        const retrievedData = this.retrieveStorageData();
        const { filter, data, favorites } = retrievedData;
        const favoriteCount = favorites.length

        this.setState({
          filter, 
          data, 
          favorites, 
          favoriteCount
        })
      }
    }

    retrieveStorageData = () => {
      const filter = JSON.parse(localStorage.getItem('category')).category
      const data = JSON.parse(localStorage.getItem(filter));
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      return { filter, data, favorites }
    }

    setData = async (filter) => {
      if(localStorage.getItem(filter) === null) {
        const data = await dataCleaner.fetchData(filter);
        localStorage.setItem(filter, JSON.stringify(data));
        localStorage.setItem('category', JSON.stringify({'category': filter}));
        this.setState({ filter, data })
      } else {
        localStorage.setItem('category', JSON.stringify({'category': filter}));
        const data = JSON.parse(localStorage.getItem(filter));
        this.setState({filter, data})
      }
    }

    findCard = (id) => {
      const selectedCard = this.state.data.find(data => data.id === id)
      this.changeFavorites(selectedCard)
    }

    changeFavorites = (selectedCard) => {
      const { favorites, data, filter } = this.state;
      let updatedFavorites = favorites;
      const duplicateFavorite = favorites.some(favorite => selectedCard.id === favorite.id)

      if(!duplicateFavorite) {
        favorites.push(selectedCard)
      } else {
        const index = favorites.indexOf(selectedCard)
        updatedFavorites.splice(index, 1)
      }

      const favoriteCount = updatedFavorites.length;
      localStorage.setItem('favorites', JSON.stringify(favorites));

      this.setState({ filter: 'favorites', favoriteCount, favorites: updatedFavorites })
    }

    toggleDisplayFavorites = () => {
      const { favorites } = this.state;
      localStorage.setItem('category', JSON.stringify({'category': this.state.filter}));
      this.setState({ data: favorites })
    } 

    render() {
      if(this.state.data) {
        const cards = this.state.data.map((eachData, index) => {
          const selected = this.state.favorites.some(favorite => favorite.id === eachData.id);
          return <Card data={eachData} key={index} findCard={this.findCard} selected={selected} />
        });

        return (
          <section className="cardContainer">
            <Buttons setData={this.setData} favoriteCount={this.state.favoriteCount} toggleDisplayFavorites={this.toggleDisplayFavorites} />
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
