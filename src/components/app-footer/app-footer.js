import React from 'react';
import './app-footer.scss';

const AppFooter = ({ isLevelGuessed, onNextLevelClick }) => {
  let classNames = 'app-footer';
  if (isLevelGuessed) {
    classNames += ' active';
  }
  return (
    <div className={classNames} onClick={onNextLevelClick}>
      Следующий уровень
    </div>
  );
};

export default AppFooter;
