import React from 'react';
import './CommentForm.scss';

import moment from 'moment';
import authData from '../../../helpers/data/authData';
import commentsData from '../../../helpers/data/commentsData';

class CommentForm extends React.Component {
  state = {
    review: '',
    isthumbsUp: '',
    rating: '',
    formOpen: false,
  }

  componentDidMount() {
    const { outingId } = this.props.match.params;
    commentsData.getCommentsByOutingId(outingId)
      .then((response) => this.setState({ comment: response.data }))
      .catch((err) => console.error('unable to get single comment: ', err));
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

  saveComment = (e) => {
    e.preventDefault();
    const {
      review,
      isthumbsUp,
      rating,
    } = this.state;
    const {
      outingId,
    } = this.props;
    const newComment = {
      outingId,
      review,
      isthumbsUp,
      rating,
      date: moment().format('LL'),
      uid: authData.getUid(),
    };
    commentsData.postComment(newComment)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to save comment:', err));
  }

  render() {
    const {
      review,
      isthumbsUp,
      rating,
    } = this.state;

    return (
      <div className="CommentForm col-12">
        <h1>All Reviews</h1>
          <button className="btn btn-success" onClick={() => this.setState({ formOpen: true })}>Add a Review</button>
          <form className="col-6 offset-3 text-left">
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
            <button className="btn btn-primary" onClick={this.saveComment}>Save Comment</button>
            </form>
      </div>
    );
  }
}

export default CommentForm;
