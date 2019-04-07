import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewComponent extends Component {


  render() {
    return (
      <section>
        <h2>Review Your Feedback</h2>
        <div>
          {this.props.reduxState.feedbackReducer.map((feedback, index) => (
            <div key={index}>
              <p>Feelings: {feedback.feelings}</p>
              <p>Understanding: {feedback.understanding}</p>
              <p>Support: {feedback.support}</p>
              <p>Comments: {feedback.comments}</p>
            </div>
          ))}
          </div>
      </section>
    );
  }
}
const mapReduxStatesToProps = reduxState => ({
  reduxState
});
export default connect(mapReduxStatesToProps)(ReviewComponent);
