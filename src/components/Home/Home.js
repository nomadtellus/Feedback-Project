import React, { Component } from 'react';

class Home extends Component {

  handleSubmit = () => {
    this.props.history.push('/feelings');
  }

  render() {
    return (
      <div>
        <h1>Let's Get Started!</h1>
        <button type="submit">Next!</button>
      </div>
    )
  }
}

export default Home;
