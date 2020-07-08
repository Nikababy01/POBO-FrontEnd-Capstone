import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getCommentsByOutingId = (outingId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comments.json?orderBy="outingId"&equalTo="${outingId}"`)
    .then((response) => {
      const fbComments = response.data;
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
const getCommentsByCommentId = (commentId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comments.json?orderBy="commentId"&equalTo="${commentId}"`)
    .then((response) => {
      const fbComments = response.data;
      const comments = [];
      if (fbComments) {
        Object.keys(fbComments).forEach((fbcommentId) => {
          fbComments[fbcommentId].id = commentId;
          comments.push(fbComments[commentId]);
        });
      }
      resolve(comments);
    })
    .catch((err) => reject(err));
});

const getSingleComment = (commentId) => axios.get(`${baseUrl}/comments/${commentId}.json`);
const postComment = (newComment) => axios.post(`${baseUrl}/comments.json`, newComment);
const deleteComment = (commentId) => axios.delete(`${baseUrl}/comments/${commentId}.json`);
const putComment = (outingId, updatedComment) => axios.put(`${baseUrl}/comments/${outingId}.json`, updatedComment);

export default {
  getCommentsByOutingId,
  getSingleComment,
  postComment,
  deleteComment,
  getCommentsByCommentId,
  putComment,
};
