import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getOutingsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/outings.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbOutings = response.data;
      const outings = [];
      if (fbOutings) {
        Object.keys(fbOutings).forEach((fbId) => {
          fbOutings[fbId].id = fbId;
          outings.push(fbOutings[fbId]);
        });
      }
      resolve(outings);
    })
    .catch((err) => reject(err));
});

const getSingleOuting = (outingId) => axios.get(`${baseUrl}/outings/${outingId}.json`);

const postOuting = (newOuting) => axios.post(`${baseUrl}/outings.json`, newOuting);

const deleteOuting = (outingId) => axios.delete(`${baseUrl}/outings/${outingId}.json`);

const putOuting = (outingId, updatedOuting) => axios.put(`${baseUrl}/outings/${outingId}.json`, updatedOuting);

export default { 
  getOutingsByUid,
  getSingleOuting,
  postOuting,
  deleteOuting,
  putOuting,
};
