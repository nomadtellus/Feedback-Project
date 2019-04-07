import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import ReviewComponent from '../ReviewComponent/ReviewComponent';
import Feeling from '../Feeling/Feeling';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  addFeedback = newFeedback => {
    Axios({
      method: "POST",
      url: "/feedback",
      data: newFeedback
    })
      .then(response => {
        console.log("Added Feedback");
        this.getFeedback();
      })
      .catch(error => {
        console.log("Error Adding Feedback");
        alert("Error Adding Feedback");
      });
  };

  componentDidMount(){
    this.getFeedback();
  }

  getFeedback = event => {
    Axios({
      method: "GET",
      url: "/feedback"
    })
      .then(response => {
        console.log(response);
        //dispatch an action to our reducers to update our redux store
        const action = { type: "ADD_FEEDBACK", payload: response.data };
        this.props.dispatch(action);
      })
      .catch(error => {
        console.log("could not get feedback");
      });
  };

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <div>
        <Route exact path="/" component={Home} />
        </div> 
        <div>
          <ReviewComponent />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
