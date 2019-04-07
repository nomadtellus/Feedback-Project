import React, { Component } from "react";
import { connect } from "react-redux";

class Support extends Component {
    state = {
        newFeedback: {
            support: '0'
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
        this.props.history.push('/comments');

        };

  render() {
    return (
      <section>
        <h2>How well do you feel supported by Prime staff?</h2>
        <div>
            <form>
                <label>Support?</label>
                <br />
                <input type="number"
                        name="support"
                        onChange={this.handleChangeFor}
                        // value={this.newFeedback.feeling}
                />                
                <br />
                <button type="submit">Next!</button>
            </form>
        </div>
      </section>
    );
  }
}
const mapReduxStatesToProps = reduxState => ({
  reduxState
});
export default connect(mapReduxStatesToProps)(Support);
