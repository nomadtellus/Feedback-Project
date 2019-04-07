import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewComponent extends Component {


  render() {
    return (
      <section>
        <h2>Review Your Feedback</h2>
        <div>
          <ul>
              <li>Feelings: {this.props.reduxState.feelingsReducer}</li>
              <li>Understanding: {this.props.reduxState.understandingReducer}</li>
              <li>Support: {this.props.reduxState.supportReducer}</li>
              <li>Comments: {this.props.reduxState.commentsReducer}</li>
          </ul>
          </div>
      </section>
    );
  }
}
const mapReduxStatesToProps = reduxState => ({
  reduxState
});
export default connect(mapReduxStatesToProps)(ReviewComponent);
