import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getAllSeasons = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/seasons.json`)
    .then((response) => {
      const demSeasons = response.data;
      const seasons = [];
      if (demSeasons) {
        Object.keys(demSeasons).forEach((seasonId) => {
          demSeasons[seasonId].id = seasonId;
          seasons.push(demSeasons[seasonId]);
        });
      }

      resolve(seasons);
    })
    .catch((err) => reject(err));
});

export default getAllSeasons;
