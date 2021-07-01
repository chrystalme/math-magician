import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <input className="d-flex justify-content-end" type="text" value={result} readOnly />
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
