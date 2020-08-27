import React from 'react';

import './bird-info-panel.scss';

const BirdInfoPanel = ({ currentBird }) => {
  if (!currentBird) {
    return (
      <div className="bird-info-empty">
        <span>Послушайте плеер.</span>
        <span>Выберите птицу из списка</span>
      </div>
    );
  } else {
    return (
      <div className="bird-info-panel">
        <div className="bird-info-panel__main">
          <img
            className="bird-image"
            src={currentBird.image}
            alt={currentBird.name}
          ></img>
          <div className="bird-info">
            <div className="bird-info__name">{currentBird.name}</div>
            <div className="bird-info__species">{currentBird.species}</div>
            <div className="bird-info__audio">
              <audio className="audio" src={currentBird.audio} controls></audio>
            </div>
          </div>
        </div>
        <div className="bird-info-panel__description">
          {currentBird.description}
        </div>
      </div>
    );
  }
};

export default BirdInfoPanel;
