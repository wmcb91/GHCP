'use strict';

const app = require('../app');

const signUp = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

const signIn = function (data) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
  });
};
//
// const changePassword = function (data) {
//   return $.ajax({
//     url: app.host + '/change-password/' + app.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
// };
//
// const signOut = function (data) {
//   return $.ajax({
//     url: app.host + '/sign-out/' + app.user.id,
//     method: 'DELETE',
//     headers: {
//         Authorization: 'Token token=' + app.user.token,
//       },
//     data: data,
//   });
// };

module.exports = {
  signUp,
  signIn,
  // changePassword,
  // signOut,
};
