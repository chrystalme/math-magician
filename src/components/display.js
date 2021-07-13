import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result, next, operator } = props;
  return (
    <>
      <input className="d-flex justify-content-end" value={result} />
      <span>{next || ''}</span>
      <span>{operator || ''}</span>
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
