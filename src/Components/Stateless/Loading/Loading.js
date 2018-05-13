import React from 'react';
import './Loading.css';
import loadingSound from './loading.wav';

const Header = (props) => {
  
  return (
    <div className="loading">
      <audio src={loadingSound} autoPlay loop></audio>
      <img src={require('./loading.gif')} height="400" alt={'Loading gif'}/>
    </div>
  );
}

export default Header;
