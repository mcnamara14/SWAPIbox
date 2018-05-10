import React from 'react';
import './Header.css';

const Header = (props) => {
  
    return (
      <div className="header">
        <button className="favorites">View Favorites{props.favoriteCount}</button>
      </div>
    );
}

export default Header;
