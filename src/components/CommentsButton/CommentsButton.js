import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class CommentsButton extends Component {

   handleClick = () => {
      console.log(`Let's go to feelings`);
      console.log('this.props.history', this.props.history);
      // Programmatically go to understanding
      this.props.history.push('/comments');
   }

   render() {
      return (
         <div>
            <button onClick={this.handleClick}>Next</button>
         </div>
      )
   }
}

export default withRouter(CommentsButton);
