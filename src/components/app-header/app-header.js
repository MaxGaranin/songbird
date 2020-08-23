import React from 'react';
import './app-header.scss';

const AppHeader = ({score}) => {
  return (
    <div className='app-header'>
      <div className="app-header__logo"></div>
      <div className="app-header__score">Счёт: {score}</div>
    </div>
  );
};

export default AppHeader;