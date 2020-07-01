import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getOutingCommentsByOutingId = (outingId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/outingComments.json?orderBy="outingId"&equalTo="${outingId}"`)
    .then((response) => {
      const fboutingComments = response.data;
      console.error('outingcommentsbyoutingid', fboutingComments);
      const outingComments = [];
      if (fboutingComments) {
        Object.keys(fboutingComments).forEach((commentId) => {
          fboutingComments[commentId].id = commentId;
          outingComments.push(fboutingComments[commentId]);
        });
      }
      resolve(outingComments);
    })
    .catch((err) => reject(err));
});

export default { getOutingCommentsByOutingId };
