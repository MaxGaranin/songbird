import React from 'react';
import './question-panel.css';
import stubImage from './../../assets/img/stub-bird.jpg';

const QuestionPanel = ({targetBird, isLevelGuessed}) => {
  const imageSrc = isLevelGuessed ? targetBird.image : stubImage;
  const birdName = isLevelGuessed ? targetBird.name : '**********';

  return (
    <div className='question-panel'>
      <img className='bird-image' src={imageSrc} alt={targetBird.name}></img>
      <div>{birdName}</div>
      <audio src={targetBird.audio} controls></audio>
    </div>
  );
};

export default QuestionPanel;