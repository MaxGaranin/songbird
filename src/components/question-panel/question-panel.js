import React from 'react';

import './question-panel.scss';
import stubImage from './../../assets/img/stub-bird.jpg';
import AudioPlayer from '../audio-player/audio-player';

const QuestionPanel = ({ targetBird, isLevelGuessed }) => {
  const imageSrc = isLevelGuessed ? targetBird.image : stubImage;
  const birdName = isLevelGuessed ? targetBird.name : '**********';

  return (
    <div className="question-panel">
      <div className="question-panel__image">
        <img className="bird-image" src={imageSrc} alt={targetBird.name}></img>
      </div>
      <div className="question-panel__info">
        <div className="question-panel__info-name">
          <span>{birdName}</span>
        </div>
        <div className="question-panel__info-audio">
          <AudioPlayer
            className="audio"
            src={targetBird.audio}
            isPause={isLevelGuessed}
          ></AudioPlayer>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;
