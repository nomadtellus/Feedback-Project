import React, { Component } from "react";
import { connect } from "react-redux";
import SubmitButton from "../SubmitButton/SubmitButton";

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
        this.props.addFeedback(this.state.newFeedback);
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
                        // value={this.newFeedback.feeling}
                />                
                <br />
                <SubmitButton />
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
