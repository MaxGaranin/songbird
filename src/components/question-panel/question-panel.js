import React from 'react';
import './question-panel.css';
import stubImage from './../../assets/img/stub-bird.jpg';

const QuestionPanel = ({bird}) => {
  return (
    <div className='question-panel'>
      <img className='bird-image' src={stubImage} alt={bird.name}></img>
      <audio src={bird.audio} controls></audio>
    </div>
  );
};

export default QuestionPanel;