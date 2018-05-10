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
      favoriteCount: 0,
      loading: true,
      favorites: [], 
      displayFavorites: false
    }

    this.setData = this.setData.bind(this);
  }

    componentDidMount = () => {
      const filter = JSON.parse(localStorage.getItem('category')).category
      const data = JSON.parse(localStorage.getItem(filter));
      
      this.setState({filter, data})
    }

    setData = async (filter) => {
      if(localStorage.getItem(filter) === null) {
        const data = await dataCleaner.fetchData(filter)
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
      const updatedData = this.state.data.map(card => {
        if(selectedCard.id === card.id) {
          card.favorite ? card.favorite = false : card.favorite = true
        } 
        return card
      });
      const favoriteCount = updatedData.filter(card => card.favorite).length
      localStorage.setItem(this.state.filter, JSON.stringify(updatedData));
      this.setState({ data: updatedData, favoriteCount })
    }

    toggleDisplayFavorites = () => {
      const updatedDisplayFavorites = this.state.displayFavorites ? false : true;
      this.setState({ displayFavorites: updatedDisplayFavorites })

      if(this.state.displayFavorites) {
        const favorites = this.state.data.filter(card => card.favorite);

        this.setState({ data: favorites })
      } 
    }

    render() {
      if(this.state.data) {
        const cards = this.state.data.map((eachData, index) => {
          return <Card data={eachData} key={index} findCard={this.findCard} />
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
