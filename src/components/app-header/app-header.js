import React from 'react';
import './app-header.css';

const AppHeader = ({score}) => {
  return (
    <div className='app-header'>
      <span>Score: {score}</span>
    </div>
  );
};

export default AppHeader;