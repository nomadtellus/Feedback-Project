import React, { Component } from 'react';

class Home extends Component {

  handleSubmit = () => {
    console.log('click');
    
    this.props.history.push('/feelings');
  }

  render() {
    return (
      <div>
        <h1>Let's Get Started!</h1>
        <button onClick={this.handleSubmit}>Next!</button>
      </div>
    )
  }
}

export default Home;
