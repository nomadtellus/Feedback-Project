import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
    state = {
        newFeedback: {
            comments: ''
    }
}


    handleChangeFor = event => {
        let propertyName = event.target.name;
        console.log("Property name is", propertyName);
        this.setState({
          newFeedback: {
            ...this.state.newFeedback,
            [propertyName]: event.target.value
          }
        });        
      };

    handleSubmit = event => {
        event.preventDefault();
        const action = { type: "ADD_COMMENTS", payload: this.state.newFeedback.comments };
        this.props.dispatch(action);
        this.props.history.push('/success');

        };

  render() {
    return (
      <section>
        <h2>Any other comments?</h2>
        <div>
            <form>
                <label>comments?</label>
                <br />
                <input type="text"
                        name="comments"
                        onChange={this.handleChangeFor}
                        value={this.state.newFeedback.comments}
                />                
                <br />
                <button onClick={this.handleSubmit}>Next!</button>
            </form>
        </div>
      </section>
    );
  }
}
const mapReduxStatesToProps = reduxState => ({
  reduxState
});
export default connect(mapReduxStatesToProps)(Comments);
