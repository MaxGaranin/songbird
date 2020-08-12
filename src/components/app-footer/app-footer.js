import React from 'react';
import './app-footer.css';

const AppFooter = ({ onNextLevelClick }) => {
  return (
    <div className="app-footer">
      <button onClick={onNextLevelClick}>Next level</button>
    </div>
  );
};

export default AppFooter;
