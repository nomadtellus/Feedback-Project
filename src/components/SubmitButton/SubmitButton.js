import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class SubmitButton extends Component {

   handleClick = () => {
      console.log(`Let's go to feelings`);
      
   }

   render() {
      return (
         <div>
            <button onClick={this.handleClick}>Next</button>
         </div>
      )
   }
}

export default withRouter(SubmitButton);
