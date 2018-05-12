import React from 'react';
import './Loading.css';

const Header = (props) => {
  
    return (
      <div className="loading">
              <img src={require('./loading.gif')} height="400" />
      </div>
    );
}

export default Header;
