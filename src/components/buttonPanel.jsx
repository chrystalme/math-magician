import React, { Component } from "react";
import Button from "./button";

class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Button />
        <Button />
        <Button />
        <Button />
      </>
    );
  }
}

export default ButtonPanel;
