import React, { Component } from "react";
import { connect } from "react-redux";
import UnderstandingButton from "../UnderstandingButton/UnderstandingButton";

class Feeling extends Component {
    state = {
        newFeedback: {
            feelings: '0'
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
        <h2>How Are You Feeling Today?</h2>
        <div>
            <form>
                <label>Feeling?</label>
                <br />
                <input type="number"
                        name="feelings"
                        onChange={this.handleChangeFor}
                        // value={this.newFeedback.feeling}
                />                
                <br />
                <UnderstandingButton />
            </form>
        </div>
      </section>
    );
  }
}
const mapReduxStatesToProps = reduxState => ({
  reduxState
});
export default connect(mapReduxStatesToProps)(Feeling);
