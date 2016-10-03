'use strict';
//PROFILE API

const app = require('../app');

const index = function() {
  return $.ajax({
    url: app.host + '/profiles',
    method: 'GET',
  });
};

//CREATE PROFILE
const createProfile = function (data) {
  return $.ajax({
    url: app.host + '/profiles',
    method: 'POST',
    data: data,
  });
};

const editProfile = function (data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

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
  index,
  createProfile,
  editProfile,
  // signOut,
};
