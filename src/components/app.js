import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: undefined,
      next: undefined,
      operation: undefined,
    };
  }

  handleClick = (buttonName) => {
        
  };

  render() {
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
