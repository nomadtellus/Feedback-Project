import React, { Component } from "react";
import { connect } from "react-redux";


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
        const action = { type: "ADD_FEELINGS", payload: this.state.newFeedback.feelings };
        this.props.dispatch(action);
        this.props.history.push('/understanding');

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
                        value={this.state.newFeedback.feeling}
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
export default connect(mapReduxStatesToProps)(Feeling);
