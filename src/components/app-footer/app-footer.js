import React from 'react';
import './app-footer.scss';

const AppFooter = ({ isLevelGuessed, onNextLevelClick }) => {
  let classNames = 'app-footer-btn';
  if (isLevelGuessed) {
    classNames += ' active';
  }
  return (
    <button className={classNames} onClick={onNextLevelClick}>
      Следующий уровень
    </button>
  );
};

export default AppFooter;
