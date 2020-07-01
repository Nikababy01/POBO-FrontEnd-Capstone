import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getCommentsByOutingId = (outingId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comments.json?orderBy="outingId"&equalTo="${outingId}"`)
    .then((response) => {
      const fbComments = response.data;
      console.error('outingcomments', fbComments);
      const comments = [];
      if (fbComments) {
        Object.keys(fbComments).forEach((commentId) => {
          fbComments[commentId].id = commentId;
          comments.push(fbComments[commentId]);
        });
      }
      resolve(comments);
    })
    .catch((err) => reject(err));
});

const getSingleComment = (outingId) => axios.get(`${baseUrl}/comments/${outingId}.json`);
const postComment = (newComment) => axios.post(`${baseUrl}/comments.json`, newComment);

export default {
  getCommentsByOutingId,
  getSingleComment,
  postComment,
};
