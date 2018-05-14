import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <div className="header">
        <img src={require('./logo.png')} height="50px" />
      </div>
    );
}

export default Header;
