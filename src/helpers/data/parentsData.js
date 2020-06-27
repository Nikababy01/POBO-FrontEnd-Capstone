// import axios from 'axios';
// import firebaseConfig from '../apiKeys.json';

// const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

// const getParentByUid = (uid) => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/parents.json?orderBy="uid"&equalTo="${uid}"`)
//     .then((response) => {
//       const fbParents = response.data;
//       const parents = [];
//       if (fbParents) {
//         Object.keys(fbParents).forEach((fbId) => {
//           fbParents[fbId].id = fbId;
//           parents.push(fbParents[fbId]);
//         });
//       }
//       resolve(parents);
//     })
//     .catch((err) => reject(err));
// });

// export default getParentByUid;
