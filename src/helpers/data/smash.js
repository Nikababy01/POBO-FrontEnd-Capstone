import outingsData from './outingsData';
import commentsData from './commentsData';
import parentsData from './parentsData';
import outingCommentsData from './outingCommentsData';
import authData from './authData';

const getParentComment = (outingId) => new Promise((resolve, reject) => {
  outingsData.getSingleOuting(outingId)
    .then((outingResponse) => {
      const uid = authData.getUid();
      parentsData.getParentByUid(uid)
        .then((parentResponse) => {
          commentsData.getCommentsByOutingId(outingId)
            .then((commentResponse) => {
              outingCommentsData.getOutingCommentsByOutingId(outingId)
                .then((outingCommentResponse) => {
                  const selectedComments = [];
                  outingCommentResponse.forEach((comment) => {
                    const foundreview = commentResponse.find((x) => x.id === comment.commentId);
                    selectedComments.push(foundreview);
                    // const selectedParent = parentResponse.find((x) => x.id === foundreview.uid);
                    // newOuting.selectedParent = selectedParent.name;
                  });
                  const newOuting = { ...outingResponse };
                  newOuting.reviewComment = selectedComments;
                  resolve(newOuting);
                });
            });
        })
        .catch((err) => reject(err));
    });
});

export default { getParentComment };
