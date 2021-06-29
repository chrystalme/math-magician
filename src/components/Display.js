import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <ReactFragment>
        <label htmlFor="displayResult">0</label>
      </ReactFragment>
    );
  }
}

export default Display;
