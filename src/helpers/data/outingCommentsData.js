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

const deleteOutingComment = (outingCommentId) => axios.delete(`${baseUrl}/outingsComments/${outingCommentId}.json`);

export default { getOutingCommentsByOutingId, deleteOutingComment };
