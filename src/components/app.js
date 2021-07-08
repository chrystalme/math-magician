import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import '../App.css';

const App = () => {
  calculate();
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
};

export default App;
