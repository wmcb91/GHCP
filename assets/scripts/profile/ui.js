'use strict';

const app = require('../app');

const showChangeProfile = function () {
  $('#chooseProfileModal').modal('show');
};

const showCreateProfile = function () {
// CHANGE TO JUST ONE MODAL with different DIVS
  $('#chooseProfileModal').modal('hide');
  $('#createProfileModal').modal('show');
  $('#profile-created-msg').hide();
};

const createProfileSuccess = function (data) {
  app.profile = data.profile;
  // Show welcome function here
  $('#createProfileModal').modal('hide');
  $('#user-welcome').show();
  $('#user-name-welcome').html(app.profile.given_name);

// debug
  // console.log('App.profile is', app.profile);
};

const createProfileFailure = function (error) {
  // create error message for UI
  return error;
  // console.log('Error is', error);
};

module.exports = {
  showChangeProfile,
  showCreateProfile,
  createProfileSuccess,
  createProfileFailure,
};
