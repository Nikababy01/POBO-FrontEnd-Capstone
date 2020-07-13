import React from 'react';
import './Comment.scss';

// import moment from 'moment';
// import authData from '../../../helpers/data/authData';

import smash from '../../../helpers/data/smash';
import commentsData from '../../../helpers/data/commentsData';
import outingCommentsData from '../../../helpers/data/outingCommentsData';
// import commentsData from '../../../helpers/data/commentsData';
// import SingleOuting from '../SingleOuting/SingleOuting';

class Comment extends React.Component {
    state = {
      comments: [],
    }

   buildReviewPage = () => {
     const { outingId } = this.props.match.params;
     smash.getParentComment(outingId)
       .then((response) => {
         this.setState({ comments: response.reviewComment });
       })
       .catch((err) => console.error('unable to get comments: ', err));
   }

   componentDidMount() {
     this.buildReviewPage();
   }

    removeComment = (e) => {
      const commentId = e.target.id;
      const outingcommentid = e.target.getAttribute('outingcommentid');
      commentsData.deleteComment(commentId)
        .then(() => {
          outingCommentsData.deleteOutingComment(outingcommentid);
          this.buildReviewPage();
        })
        .catch((err) => console.error('unable to delete comment: ', err));
    }

    render() {
      const { comments } = this.state;
      const buildComments = () => comments.map((comment) => (
        <div className= "container" key={comment.id} >
        <div className="user-review">
      <h4>{comment.review}</h4>
      <p>{comment.name}</p>
      <p>Date: {comment.date}</p>
      <button className="btn btn-info m-2" outingcommentid={comment.outingCommentId} id={comment.id} onClick={this.removeComment}>Delete Review</button>
      </div>
      </div>
      ));
      return (
        <div className="Comment col-12">
        <h2>REVIEWS</h2>
          <div className= "d-flex flex-wrap">
            {buildComments()}
          </div>
         </div>
      );
    }
}

export default Comment;
