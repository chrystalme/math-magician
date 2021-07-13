import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: undefined,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const result = calculate({ total, next, operation }, buttonName);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display result={total} operator={operation} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
