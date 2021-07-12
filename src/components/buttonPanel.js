import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div className="btn-group" role="group" aria-label="Basic example">
      <Button name="AC" clickHandler={(name) => clickHandler(name)} />
      <Button name="+/-" clickHandler={(name) => clickHandler(name)} />
      <Button name="%" clickHandler={(name) => clickHandler(name)} />
      <Button name="÷" clickHandler={(name) => clickHandler(name)} />
    </div>
    <div className="btn-group" role="group" aria-label="Basic example">
      <Button name="7" clickHandler={(name) => clickHandler(name)} />
      <Button name="8" clickHandler={(name) => clickHandler(name)} />
      <Button name="9" clickHandler={(name) => clickHandler(name)} />
      <Button name="x" clickHandler={(name) => clickHandler(name)} />
    </div>
    <div className="btn-group" role="group" aria-label="Basic example">
      <Button name="4" clickHandler={(name) => clickHandler(name)} />
      <Button name="5" clickHandler={(name) => clickHandler(name)} />
      <Button name="6" clickHandler={(name) => clickHandler(name)} />
      <Button name="-" clickHandler={(name) => clickHandler(name)} />
    </div>
    <div className="btn-group" role="group" aria-label="Basic example">
      <Button name="1" clickHandler={(name) => clickHandler(name)} />
      <Button name="2" clickHandler={(name) => clickHandler(name)} />
      <Button name="3" clickHandler={(name) => clickHandler(name)} />
      <Button name="+" clickHandler={(name) => clickHandler(name)} />
    </div>
    <div className="btn-group" role="group" aria-label="Basic example">
      <Button name="0" clickHandler={(name) => clickHandler(name)} />
      <Button name="." clickHandler={(name) => clickHandler(name)} />
      <Button name="=" clickHandler={(name) => clickHandler(name)} />
    </div>
  </>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
