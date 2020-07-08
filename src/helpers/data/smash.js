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
                foundreview.outingCommentId = comment.id;
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

const completelyRemoveOuting = (outingId) => new Promise((resolve, reject) => {
  outingsData.deleteOuting(outingId)
    .then(() => {
      outingCommentsData.getOutingCommentsByOutingId(outingId)
        .then((outingCommentResponse) => {
          console.log('outingCommentResponse', outingCommentResponse);
          outingCommentResponse.forEach((outComment) => {
            outingCommentsData.deleteOutingComment(outComment.id);
            const { commentId } = outComment;
            console.log('smash', commentId);
            commentsData.deleteComment(commentId);
          });
          resolve();
        });
    })
    .catch((err) => reject(err));
});

export default { getParentComment, completelyRemoveOuting };
