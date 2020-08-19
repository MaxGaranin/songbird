import React from 'react';

import './birds-list.scss';

const BirdsList = ({ birds, onBirdClick }) => {
  const items = birds.map((bird) => {
    let classNames = 'birds-list-item__status';
    switch (bird.status) {
      case 0:
        break;
      case -1:
        classNames += ' false';
        break;
      case 1:
        classNames += ' true';
        break;
      default:
        break;
    }

    return (
      <li
        className="birds-list-item"
        key={bird.id}
        onClick={() => onBirdClick(bird.id)}
      >
        <span className={classNames}></span>
        <span className="birds-list-item__name">{bird.name}</span>
      </li>
    );
  });

  return <ul className="birds-list">{items}</ul>;
};

export default BirdsList;
