import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import '../App.css';

function App() {
  return (

    <form className="App-header" action="">
      <Display result="0" />
      <ButtonPanel />
    </form>
  );
}

export default App;
