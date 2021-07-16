import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import styles from '../styles/main.module.css';

const App = () => {
  const [total, setTotal] = useState(undefined);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className={styles.app}>
      <Display result={total} operator={operation} next={next} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
