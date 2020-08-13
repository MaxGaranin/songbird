import React from 'react';
import './bird-info-panel.css';

const BirdInfoPanel = ({ currentBird }) => {
  if (!currentBird) {
    return <></>;
  } else {
    return (
      <div className="bird-info-panel">
        <img
          className="bird-image"
          src={currentBird.image}
          alt={currentBird.name}
        ></img>
        <div>{currentBird.name}</div>
        <div>{currentBird.species}</div>
        <audio src={currentBird.audio} controls></audio>
        <div>{currentBird.description}</div>
      </div>
    );
  }
};

export default BirdInfoPanel;
