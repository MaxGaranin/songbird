import React from 'react';

import './birds-list.css';

const BirdsList = ({birds, onBirdClick}) => {
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
      <li key={bird.id} className="birds-list-item" onClick={() => onBirdClick(bird.id)}>
        <span className={classNames}>&nbsp;&nbsp;&nbsp;</span>
        <span>{bird.name}</span>
      </li>
    );
  });

  return <ul className="birds-list">{items}</ul>;  
};

export default BirdsList;