import outingsData from './outingsData';
import commentsData from './commentsData';
import outingCommentsData from './outingCommentsData';

const getParentComment = (outingId) => new Promise((resolve, reject) => {
  outingsData.getSingleOuting(outingId)
    .then((outingResponse) => {
      commentsData.getCommentsByOutingId(outingId)
        .then((commentResponse) => {
          outingCommentsData.getOutingCommentsByOutingId(outingId)
            .then((outingCommentResponse) => {
              const selectedComments = [];
              outingCommentResponse.forEach((comment) => {
                const foundreview = commentResponse.find((x) => x.id === comment.commentId);
                selectedComments.push(foundreview);
              });
              const newOuting = { ...outingResponse };
              newOuting.reviewComment = selectedComments;
              resolve(newOuting);
            });
        });
    })
    .catch((err) => reject(err));
});

const completelyRemoveComment = (commentId) => new Promise((resolve, reject) => {
  commentsData.deleteComment(commentId)
    .then(() => {
      outingCommentsData.getOutingCommentsByOutingId(commentId)
        .then((comments) => {
          comments.forEach((comment) => outingCommentsData.deleteOutingComment(comment.id));
          resolve();
        });
    })
    .catch((err) => reject(err));
});

export default { getParentComment, completelyRemoveComment };
