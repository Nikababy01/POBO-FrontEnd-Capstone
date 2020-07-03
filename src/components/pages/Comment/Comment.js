import React from 'react';
import './Comment.scss';

// import moment from 'moment';
// import authData from '../../../helpers/data/authData';

import smash from '../../../helpers/data/smash';
// import commentsData from '../../../helpers/data/commentsData';
// import SingleOuting from '../SingleOuting/SingleOuting';

class Comment extends React.Component {
    state = {
      comments: [],
    }

    componentDidMount() {
      const { outingId } = this.props.match.params;
      smash.getParentComment(outingId)
        .then((response) => {
          this.setState({ comments: response.reviewComment });
        })
        .catch((err) => console.error('unable to get comments: ', err));
    }

    removeComment = () => {
      const { commentId } = this.props.match.params;
      smash.completelyRemoveComment(commentId)
        .then(() => this.props.history.push('/home'))
        .catch((err) => console.error('unable to delete comment: ', err));
    }

    render() {
      const { comments } = this.state;
      const buildComments = () => comments.map((item) => (
        <div className= "container">
        <div className="user-review">
      <h4>{item.review}</h4>
      <p>{item.name}</p>
      <p>Date: {item.date}</p>
      <button className="btn btn-info" onClick={this.removeComment}>Delete Review</button>
      </div>
      </div>
      ));
      return (
        <div className="Comment">
        <h2>REVIEWS</h2>
          <div className= "d-flex flex-wrap">
            {buildComments()}
          </div>
         </div>
      );
    }
}

export default Comment;
