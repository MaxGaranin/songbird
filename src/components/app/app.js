import React, { Component } from 'react';
import AppHeader from './../app-header';
import LevelsPanel from './../levels-panel';
import QuestionPanel from './../question-panel';
import BirdsList from './../birds-list';
import BirdInfoPanel from './../bird-info-panel';
import AppFooter from './../app-footer';
import birdsData from './../../data/birds-data';
import { getRandomIntInclusive } from './../../utils/utils';

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

class App extends Component {
  constructor() {
    super();
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  state = {
    score: 0,
    birdsData,
    levels,
    currentLevelIndex: minLevelIndex,
    ...this.getCurrentLevelBirdsInfo(minLevelIndex)
  };

  getCurrentLevelBirdsInfo(currentLevelIndex) {
    const targetBirdId = getRandomIntInclusive(minBirdId, maxBirdId);
    const birdItems = birdsData[currentLevelIndex];
    const birds = birdItems.map((item) => ({ ...item, status: 0 }));
    const targetBird = birds.find((bird) => bird.id === targetBirdId);

    return { birds, targetBird };
  }

  nextLevelHandler = () => {
    this.setState(({ currentLevelIndex }) => {
      currentLevelIndex++;
      if (currentLevelIndex > maxLevelIndex) currentLevelIndex = minLevelIndex;

      const birdsInfo = this.getCurrentLevelBirdsInfo(currentLevelIndex);

      return { currentLevelIndex, ...birdsInfo };
    });
  };

  birdClickHandler = (id) => {
    this.setState(({ birds, targetBird }) => {
      const idx = birds.findIndex((bird) => bird.id === id);

      const oldItem = birds[idx];
      const status = oldItem.id === targetBird.id ? 1 : -1;
      const newItem = { ...oldItem, status };
      const newBirds = [
        ...birds.slice(0, idx),
        newItem,
        ...birds.slice(idx + 1),
      ];
      return { birds: newBirds };
    });
  };

  render() {
    const { levels, currentLevelIndex, birds, targetBird } = this.state;

    console.log('render');

    return (
      <div className="app">
        <AppHeader />
        <LevelsPanel levels={levels} currentLevelIndex={currentLevelIndex} />
        <QuestionPanel bird={targetBird} />
        <div>
          <BirdsList birds={birds} onBirdClick={this.birdClickHandler} />
          <BirdInfoPanel />
        </div>
        <AppFooter onNextLevelClick={this.nextLevelHandler} />
      </div>
    );
  }
}

export default App;
