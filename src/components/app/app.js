import React from 'react';
import AppHeader from './../app-header';
import LevelsPanel from './../levels-panel';
import QuestionPanel from './../question-panel';
import BirdsList from './../birds-list';
import BirdInfoPanel from './../bird-info-panel';
import AppFooter from './../app-footer';

import './app.css';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <LevelsPanel />
      <QuestionPanel />
      <div>
        <BirdsList />
        <BirdInfoPanel />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
