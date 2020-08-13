import React, { Component } from 'react';
import AppHeader from './../app-header';
import LevelsPanel from './../levels-panel';
import QuestionPanel from './../question-panel';
import BirdsList from './../birds-list';
import BirdInfoPanel from './../bird-info-panel';
import AppFooter from './../app-footer';
import birdsData from './../../data/birds-data';
import { getRandomIntInclusive } from './../../utils/utils';

import winAudio from './../../assets/audio/win.mp3';
import errorAudio from './../../assets/audio/error.mp3';
import './app.css';

const levels = [
  { id: 1, title: 'Разминка' },
  { id: 2, title: 'Воробьиные' },
  { id: 3, title: 'Лесные птицы' },
  { id: 4, title: 'Певчие птицы' },
  { id: 5, title: 'Хищные птицы' },
  { id: 6, title: 'Морские птицы' },
];

const minBirdId = 1;
const maxBirdId = 6;
const minLevelIndex = 0;
const maxLevelIndex = 5;
const maxLevelScore = 5;
const maxScore = maxLevelScore * (maxLevelIndex - minLevelIndex + 1);

class App extends Component {
  state = {
    score: 0,
    levelScore: maxLevelScore,
    birdsData,
    levels,
    currentLevelIndex: minLevelIndex,
    ...this.getCurrentLevelBirdsInfo(minLevelIndex),
    isLevelGuessed: false,
    currentBird: null,
    isFinal: false,
  };

  getCurrentLevelBirdsInfo(currentLevelIndex) {
    const targetBirdId = getRandomIntInclusive(minBirdId, maxBirdId);
    const birdItems = birdsData[currentLevelIndex];
    const birds = birdItems.map((item) => ({ ...item, status: 0 }));
    const targetBird = birds.find((bird) => bird.id === targetBirdId);

    return { birds, targetBird };
  }

  nextLevelHandler = () => {
    this.setState(({ currentLevelIndex, levelScore, isLevelGuessed, isFinal }) => {
      currentLevelIndex++;
      if (currentLevelIndex > maxLevelIndex) {
        currentLevelIndex--;
        isFinal = true;
      }

      const birdsInfo = this.getCurrentLevelBirdsInfo(currentLevelIndex);
      levelScore = maxLevelScore;
      isLevelGuessed = false;

      return { currentLevelIndex, ...birdsInfo, levelScore, isLevelGuessed, isFinal };
    });
  };

  startQuizHandler = () => {
    this.setState(() => {
      const currentLevelIndex = minLevelIndex;
      const birdsInfo = this.getCurrentLevelBirdsInfo(currentLevelIndex);
      const levelScore = maxLevelScore;
      const score = 0;
      const isLevelGuessed = false;
      const isFinal = false;
      return {
        currentLevelIndex,
        ...birdsInfo,
        levelScore,
        score,
        isLevelGuessed,
        isFinal,
      };
    });
  };

  birdClickHandler = (id) => {
    const { isLevelGuessed, birds } = this.state;

    const idx = birds.findIndex((bird) => bird.id === id);
    const currentBird = birds[idx];

    if (isLevelGuessed) {
      this.setState((prev) => {
        return { ...prev, currentBird };
      });
      return;
    }

    this.setState(({ targetBird, score, levelScore, isLevelGuessed }) => {
      const oldItem = birds[idx];

      const status = oldItem.id === targetBird.id ? 1 : -1;
      if (status > 0) {
        score += levelScore;
        isLevelGuessed = true;
      } else {
        levelScore--;
      }
      this.playStatusSound(status);

      const newItem = { ...oldItem, status };
      const newBirds = [
        ...birds.slice(0, idx),
        newItem,
        ...birds.slice(idx + 1),
      ];

      return {
        birds: newBirds,
        score,
        levelScore,
        isLevelGuessed,
        currentBird,
      };
    });
  };

  playStatusSound(status) {
    const src = status === 1 ? winAudio : errorAudio;
    const audio = new Audio(src);
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    const {
      levels,
      currentLevelIndex,
      birds,
      targetBird,
      score,
      currentBird,
      isLevelGuessed,
      isFinal,
    } = this.state;

    if (isFinal) {
      return (
        <div className="congratulation-panel">
          <h1>Поздравляем!</h1>
          <div>
            Вы прошли викторину и набрали {score} из {maxScore} возможных баллов
          </div>
          <button onClick={this.startQuizHandler}>Попробовать еще раз!</button>
        </div>
      );
    } else {
      return (
        <div className="app">
          <AppHeader score={score} />
          <LevelsPanel levels={levels} currentLevelIndex={currentLevelIndex} />
          <QuestionPanel targetBird={targetBird} isLevelGuessed={isLevelGuessed} />
          <div>
            <BirdsList birds={birds} onBirdClick={this.birdClickHandler} />
            <BirdInfoPanel currentBird={currentBird} />
          </div>
          <AppFooter onNextLevelClick={this.nextLevelHandler} />
        </div>
      );
    }
  }
}

export default App;
