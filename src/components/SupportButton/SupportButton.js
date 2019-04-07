import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class SupportButton extends Component {

   handleClick = () => {
      console.log(`Let's go to support`);
      console.log('this.props.history', this.props.history);
      // Programmatically go to understanding
      this.props.history.push('/support');
   }

   render() {
      return (
         <div>
            <button onClick={this.handleClick}>Next</button>
         </div>
      )
   }
}

export default withRouter(SupportButton);
