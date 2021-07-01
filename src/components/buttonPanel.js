import React from 'react';
// import PropTypes, { string } from 'prop-types';
import Button from './button';

// eslint-disable-next-line arrow-body-style
const ButtonPanel = () => {
  // let { groups } = props;

  // groups = {
  //   btnGroup1: { items: ['AC', '+/-', '%', '/'] },
  //   btnGroup2: { items: ['7', '8', '9', 'X'] },
  //   btnGroup3: { items: ['4', '5', '6', '-'] },
  //   btnGroup4: { items: ['1', '2', '3', '+'] },
  //   btnGroup5: { items: ['0', '.', '='] },

  // };

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="/" />
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" />
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </>
  );
};

// ButtonPanel.propTypes = {
//   names: PropTypes.arrayOf(string).isRequired,
// };

export default ButtonPanel;
