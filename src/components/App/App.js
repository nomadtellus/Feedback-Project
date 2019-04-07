import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import ReviewComponent from '../ReviewComponent/ReviewComponent';
import Feeling from '../Feeling/Feeling';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments'
import Success from '../Success/Success'


class App extends Component {




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
        <Route exact path="/"
        render={(addFeedback, getFeedback) => 
        <Home {...addFeedback} {...getFeedback}/>}
        />

        <Route exact path="/feelings" 
        render={(addFeedback, getFeedback) => 
        <Feeling {...addFeedback} {...getFeedback}/> }
        />

        <Route exact path="/understanding" 
        render={(addFeedback, getFeedback) => 
        <Understanding {...addFeedback} {...getFeedback}/>}
        />
          
        <Route exact path="/support" 
        render={(addFeedback, getFeedback) => 
        <Support {...addFeedback} {...getFeedback}/>}
        />
          
        <Route exact path="/comments" 
        render={(addFeedback, getFeedback) => 
          <Comments {...addFeedback} {...getFeedback}/>}
          />

        <Route exact path="/success" 
        render={(addFeedback, getFeedback) => 
        <Success {...addFeedback} {...getFeedback}/>}
        />
      </div>

      

          </div>
          <div>
          <ReviewComponent getFeedback={this.getFeedback}/>
        </div>
      </Router>
    );
  }
}

export default App;
