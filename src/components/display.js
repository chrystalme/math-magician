import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/main.module.css';

const operatorStyle = {
  color: 'black',
  top: 50,
  left: 380,
};
const Display = (props) => {
  const { result, next, operator } = props;
  return (
    <>
      <div
        className={styles.display}
      >
        {result}

        <span style={operatorStyle}>{operator || ''}</span>
        <span>{next || ''}</span>
      </div>
    </>
  );
};

Display.defaultProps = {
  result: '0',
  next: undefined,
  operator: undefined,
};

Display.propTypes = {
  next: PropTypes.string,
  result: PropTypes.string,
  operator: PropTypes.string,
};

export default Display;
