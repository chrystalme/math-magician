import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import '../App.css';

const App = () => {

  const handleClick = buttonName => {
    const result = calculate({ total, next, operation }, buttonName);
    // alert(event.target.value);
  };
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
};

export default App;
