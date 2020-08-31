import React from 'react';

import './levels-panel.scss';

const LevelsPanel = ({ levels, currentLevelIndex }) => {
  
  const items = levels.map((level, index) => {
    let classNames = 'level-item';
    if (index === currentLevelIndex) {
      classNames += ' active';
    }

    return (
      <li key={level.id} className={classNames}>
        {level.title}
      </li>
    );
  });

  return <ul className="levels-panel">{items}</ul>;
};

export default LevelsPanel;
