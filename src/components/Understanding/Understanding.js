import React, { Component } from "react";
import { connect } from "react-redux";
import SupportButton from "../SupportButton/SupportButton";

class Understanding extends Component {
    state = {
        newFeedback: {
            understanding: '0'
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
        <h2>How well did you understand today's material?</h2>
        <div>
            <form>
                <label>Understanding?</label>
                <br />
                <input type="number"
                        name="understanding"
                        onChange={this.handleChangeFor}
                        // value={this.newFeedback.feeling}
                />                
                <br />
                <SupportButton />
            </form>
        </div>
      </section>
    );
  }
}
const mapReduxStatesToProps = reduxState => ({
  reduxState
});
export default connect(mapReduxStatesToProps)(Understanding);
