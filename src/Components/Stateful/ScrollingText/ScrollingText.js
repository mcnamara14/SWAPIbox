import React, { Component } from 'react';
import './ScrollingText.css';
import themeSong from './imperial-march.mp3';

class ScrollingText extends Component {
  constructor() {
    super();
    
    this.state = {
      crawl: '', 
      title: '',
      date: ''
    };
  }
    
  componentDidMount = async () => {
    try {
      const response = await fetch('https://swapi.co/api/films');
      const data = await response.json();
  
      await this.returnRandomCrawl(data.results);
    } catch (error) {
      throw Error(`Error fetching scroll text`);
    }
  }

  returnRandomCrawl = (films) => {
    const filmsLength = films.length;
    const randomFilm = Math.floor(Math.random() * filmsLength) + 0;
    const crawl = films[randomFilm].opening_crawl;
    const title = films[randomFilm].title;
    const date = films[randomFilm].release_date;

    this.setState({ crawl, title, date });
  }

  render() {
    return (
      <section className="scrollingTextContainer">
        <div id="titles">
          <div id="titlecontent">
            <p>{this.state.crawl}</p>
            <p><span>{this.state.title}</span></p>
            <p className="scrollYear"><span>{this.state.date}</span></p>
            <audio src={themeSong} autoPlay loop></audio>
          </div>
        </div>
      </section>

    );
  }
}

export default ScrollingText;
