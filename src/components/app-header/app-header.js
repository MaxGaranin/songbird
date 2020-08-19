import React from 'react';
import './app-header.scss';

const AppHeader = ({score}) => {
  return (
    <div className='app-header'>
      <span className="app-header__logo">Songbird</span>
      <span>Score: {score}</span>
    </div>
  );
};

export default AppHeader;