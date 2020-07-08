import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getOutingCommentsByOutingId = (outingId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/outingComments.json?orderBy="outingId"&equalTo="${outingId}"`)
    .then((response) => {
      const fboutingComments = response.data;
      const outingComments = [];
      if (fboutingComments) {
        Object.keys(fboutingComments).forEach((outingCommentId) => {
          fboutingComments[outingCommentId].id = outingCommentId;
          outingComments.push(fboutingComments[outingCommentId]);
        });
      }
      resolve(outingComments);
    })
    .catch((err) => reject(err));
});

const getOutingComments = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/outingComments.json`)
    .then((response) => {
      const fboutingComments = response.data;
      const outingComments = [];
      if (fboutingComments) {
        Object.keys(fboutingComments).forEach((outingCommentId) => {
          fboutingComments[outingCommentId].id = outingCommentId;
          outingComments.push(fboutingComments[outingCommentId]);
        });
      }
      resolve(outingComments);
    })
    .catch((err) => reject(err));
});

const deleteOutingComment = (outingCommentsId) => axios.delete(`${baseUrl}/outingComments/${outingCommentsId}.json`);
const postOutingComment = (newOutingComment) => axios.post(`${baseUrl}/outingComments.json`, newOutingComment);
const putOutingComment = (outingId, updatedOutingComment) => axios.put(`${baseUrl}/outingComments/${outingId}.json`, updatedOutingComment);

export default {
  getOutingCommentsByOutingId,
  deleteOutingComment,
  getOutingComments,
  postOutingComment,
  putOutingComment,
};
