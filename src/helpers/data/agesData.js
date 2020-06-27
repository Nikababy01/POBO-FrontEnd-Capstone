import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getAllAges = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/ages.json`)
    .then((response) => {
      const demAges = response.data;
      const ages = [];
      if (demAges) {
        Object.keys(demAges).forEach((ageId) => {
          demAges[ageId].id = ageId;
          ages.push(demAges[ageId]);
        });
      }

      resolve(ages);
    })
    .catch((err) => reject(err));
});

export default getAllAges;
