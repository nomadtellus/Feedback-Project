import React, { Component } from 'react';
import AnimalButton from '../FeelingsButton/FeelingsButton';

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Let's Get Started!</h1>
        <FeelingsButton />
      </div>
    )
  }
}

export default Home;
