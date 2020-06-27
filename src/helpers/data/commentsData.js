import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getCommentsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comments.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbComments = response.data;
      const comments = [];
      if (fbComments) {
        Object.keys(fbComments).forEach((fbId) => {
          fbComments[fbId].id = fbId;
          comments.push(fbComments[fbId]);
        });
      }
      resolve(comments);
    })
    .catch((err) => reject(err));
});

export default getCommentsByUid;
