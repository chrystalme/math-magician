import React from 'react';
import PropTypes from 'prop-types';

const operatorStyle = {
  color: 'black',
  top: 50,
  left: 380,
};

const displayStyle = {
  fontWeight: 700,
  fontSize: 'x-large',
  color: 'tomato',
  backgroundColor: 'whitesmoke',
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '300px',
  height: 70,
  padding: 5,
};

const Display = (props) => {
  const { result, next, operator } = props;
  return (
    <>
      <div
        style={displayStyle}
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
