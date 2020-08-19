import React, {useRef} from 'react';

import './question-panel.scss';
import stubImage from './../../assets/img/stub-bird.jpg';

const QuestionPanel = ({ targetBird, isLevelGuessed }) => {
  const audioRef = useRef(null);

  const imageSrc = isLevelGuessed ? targetBird.image : stubImage;
  const birdName = isLevelGuessed ? targetBird.name : '**********';

  if (isLevelGuessed) {
    audioRef.current.pause();
  }

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
          <audio
            className="audio"
            ref={audioRef}
            src={targetBird.audio}
            controls
          ></audio>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;
