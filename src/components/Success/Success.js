import React, { Component } from "react";
import { connect } from "react-redux";

class Success extends Component {


    handleSubmit = event => {
        event.preventDefault();
        this.props.history.push('/');

        };

  render() {
    return (
      <section>
        <h2>Feedback Submitted Successfully!</h2>
        <div>
            <form>
                <label>Start Over?</label>             
                <br />
                <button onClick={this.handleSubmit}>Go Back Home</button>
            </form>
        </div>
      </section>
    );
  }
}
const mapReduxStatesToProps = reduxState => ({
  reduxState
});
export default connect(mapReduxStatesToProps)(Success);
