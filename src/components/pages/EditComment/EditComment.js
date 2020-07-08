import React from 'react';
import './EditComment.scss';

import moment from 'moment';
import authData from '../../../helpers/data/authData';
import commentsData from '../../../helpers/data/commentsData';

class EditComment extends React.Component {
  state = {
    review: '',
    isthumbsUp: '',
    rating: '',
    name: '',
    emailAddress: '',
    outingId: '',
  }

  componentDidMount() {
    const { commentId } = this.props.match.params;
    console.log('myouting', commentId);
    commentsData.getSingleComment(commentId)
      .then((response) => {
        const comment = response.data;
        this.setState({
          review: comment.review,
          isthumbsUp: comment.isthumbsUp,
          rating: comment.rating,
          name: comment.name,
          emailAddress: comment.emailAddress,
          outingId: comment.outingId,
        });
      })
      .catch((err) => console.error('unable to get single comment: ', err));
  }

   nameChange = (e) => {
     e.preventDefault();
     this.setState({ name: e.target.value });
   }

   emailAddressChange = (e) => {
     e.preventDefault();
     this.setState({ emailAddress: e.target.value });
   }

  reviewChange = (e) => {
    e.preventDefault();
    this.setState({ review: e.target.value });
  }

  isthumbsUpChange = (e) => {
    e.preventDefault();
    this.setState({ isthumbsUp: e.target.value });
  }

ratingChange = (e) => {
  e.preventDefault();
  this.setState({ rating: e.target.value });
}

  updateComment = (e) => {
    e.preventDefault();
    const {
      name,
      emailAddress,
      review,
      isthumbsUp,
      rating,
      outingId,
    } = this.state;
    const { commentId } = this.state;
    console.log('comment commentId', commentId);
    const updatedComment = {
      name,
      emailAddress,
      outingId,
      review,
      isthumbsUp,
      rating,
      date: moment().format('LL'),
      uid: authData.getUid(),
    };
    commentsData.putComment(commentId, updatedComment)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to update comment:', err));
  }

  render() {
    const {
      review,
      isthumbsUp,
      rating,
      name,
      emailAddress,
    } = this.state;

    return (
      <div className="CommentForm col-12">
        <h1>Edit Review</h1>
         <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="comment-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="comment-name"
              value={name}
              onChange={this.nameChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="comment-emailAddress">Enter Email</label>
            <input
              type="text"
              className="form-control"
              id="comment-emailAddress"
              value={emailAddress}
              onChange={this.emailAddressChange}
            />
            </div>
          <div className="form-group">
            <label htmlFor="comment-review">Add Review Comment</label>
            <input
              type="text"
              className="form-control"
              id="comment-review"
              value={review}
              onChange={this.reviewChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="comment-isthumbsUp">Would You Give Thumbs Up</label>
            <input
              type="text"
              className="form-control"
              id="comment-isthumbsUp"
              value={isthumbsUp}
              onChange={this.isthumbsUpChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="comment-rating">Star Rating</label>
            <input
              type="text"
              className="form-control"
              id="comment-rating"
              value={rating}
              onChange={this.ratingChange}
            />
            </div>
            <button className="btn btn-primary" onClick={this.updateComment}>Save Comment</button>
            </form>
      </div>
    );
  }
}

export default EditComment;
