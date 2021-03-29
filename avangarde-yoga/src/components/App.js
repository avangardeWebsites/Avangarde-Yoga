import React, { Component } from 'react';
import './App.css';
import TopNavigation from './TopNavigation.js';
import Intro from './Intro';
import TestAnimation from './TestAnimation';
import AboutUs from './AboutUs';

function App() {
  return (
      <div>
        <TopNavigation />
        <Intro />
        <TestAnimation />
        <AboutUs />
      </div>  
  );
}

export default App;
