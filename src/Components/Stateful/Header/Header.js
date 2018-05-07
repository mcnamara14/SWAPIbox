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
        I'm a header
      </div>
    );
  };
}

export default Header;
