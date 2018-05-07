import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      favorites: 0
    }
  }
  
  render() {
    return (
      <div className="header">
        <button className="favorites">View Favorites</button>
      </div>
    );
  };
}

export default Header;
