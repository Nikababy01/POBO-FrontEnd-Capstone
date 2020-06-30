// import outingsData from './outingsData';
// import commentsData from './commentsData';
// import parentsData from './parentsData';

// const getParentComment = (outingId) => new Promise((resolve, reject) => {
//   outingsData.getSingleOuting(outingId)
//   .then((outingresponse) => {
//     parentsData.getParentByUid(uid)
//     .then((parentresponse) => {
//       commentsData.getCommentsByUid(uid)
//       .then((commentresponse) = {
//         outings = [];
//         outingresponse.forEach((outing) => {
//           const daOuting = {
//             id: outing.id,
//             uid: outing.uid,
//             name: outing.name,
//             description: outing.description,
//             imageUrl: outing.imageUrl,
//             address: outing.address,
//             city: outing.city,
//             state: outing.state,
//             zipcode: outing.zipcode,
//             price:outing.price,
//             comment: commentresponse.filter((x) => x.id === outing.outingId),
//             parent: parentresponse.filter((x) => x.id === outing.uid)
//           };
//           outings.push(daOuting);
//         });
//         resolve(outings);
//       });
//     });
//   })
//   .catch((err) => reject(err));
// });

// export default getParentComment;
