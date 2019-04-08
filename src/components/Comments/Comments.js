import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from 'axios';

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

      
      
      // let savedFeedback = {
        
      //   feelings: `${newFeedback.feelingsReducer}`,
      //   understanding: `${newFeedback.understandingReducer}`,
      //   support: `${newFeedback.supportReducer}`,
      //   comments: `${newFeedback.commentsReducer}`
      // }
        event.preventDefault();
        const action = { type: "ADD_COMMENTS", payload: this.state.newFeedback.comments };
        this.props.dispatch(action);
        let newFeedback = this.props.reduxState
        let savedFeedback = [];
        for (let feedback of newFeedback){
          savedFeedback.push(feedback);
        }
        this.props.history.push('/success');

          // ajax call to server to get koalas
          Axios({
            method: 'POST',
            url: '/feedback',
            data: savedFeedback,
          })
          .catch(function (error){
            console.log('unable to save new feedbac');
            alert(`Unable to save new feedback`);
          })
         
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
