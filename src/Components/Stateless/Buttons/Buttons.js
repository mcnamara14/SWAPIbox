import React, { Component } from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';

class Buttons extends Component {
  constructor(props){
    super(props);
  }

  handleClick = () => {
    if (this.props.favoriteCount > 0) {
      this.props.toggleDisplayFavorites();
    } else {
      this.props.toggleAddFavorites();
    }
  }

  render() {
    return (
      <section className="filterButtons">
        <div>
          <button className="people" onClick={() => 
            this.props.setData('people')} >people</button>
          <button className="planets" onClick={() => 
            this.props.setData('planets')} >planets</button>
          <button className="vehicles" onClick={() => 
            this.props.setData('vehicles')} >vehicles</button>
          <button className="favorites" onClick={() => 
            this.handleClick()} >View Favorites<span>
              {this.props.favoriteCount}</span></button>
        </div>
      </section>
    );
  }
}

Buttons.propTypes = {
  setData: PropTypes.func,
  toggleDisplayFavorites: PropTypes.func,
  favoriteCount: PropTypes.number,
  toggleAddFavorites: PropTypes.func
};

export default Buttons;
