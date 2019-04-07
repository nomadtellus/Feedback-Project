import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewComponent extends Component {
    
    state = {
        newFeedback: {
          feelings: '0',
          understanding: '0',
          support: '0',
          comments: '',
        }
      }

  render() {
    return (
      <section>
        <h2>Review Your Feedback</h2>
          {this.props.reduxState.feedbackReducer.map((feedback, index) => (
            <div key={index}>
              <p>Feelings: {feedback.feelings}</p>
              <p>Understanding: {feedback.understanding}</p>
              <p>Support: {feedback.support}</p>
              <p>Comments: {feedback.comments}</p>
            </div>
          ))}
      </section>
    );
  }
}
const mapReduxStatesToProps = reduxState => ({
  reduxState
});
export default connect(mapReduxStatesToProps)(ReviewComponent);
