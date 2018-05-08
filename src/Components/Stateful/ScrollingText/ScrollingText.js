import React, { Component } from 'react';
import './ScrollingText.css';

class ScrollingText extends Component {
  constructor() {
    super();
    
    this.state = {
      crawl: '', 
      title: '',
      date: ''
    }
  }
    
  componentDidMount = () => {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(response => this.returnRandomCrawl(response.results))
  }

  returnRandomCrawl = (films) => {
    const filmsLength = films.length;
    const randomFilm = Math.floor(Math.random() * filmsLength) + 0;
    const crawl = films[randomFilm].opening_crawl;
    const title = films[randomFilm].title;
    const date = films[randomFilm].release_date;

    this.setState({ crawl, title, date })
  }

  render() {
    return (
      <div className="scrollingText">
        <p>{this.state.crawl}</p>
        <p>{this.state.title}</p>
        <p>{this.state.date}</p>
      </div>
    );
  };
}

export default ScrollingText;
