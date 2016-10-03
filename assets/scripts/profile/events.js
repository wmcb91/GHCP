'use strict';
//PROFILE EVENTS

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const onChangeProfileClick = function () {
  ui.showChangeProfile();

  // DEBUG
  console.log('Change profile button click heard');
};

const onNewProfileClick = function () {
  ui.showCreateProfile();

  // DEBUG
  console.log('Profile click heard');
  console.log(app.user.id);
};

const onCreateProfile = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.user_id = app.user.id;
  api.createProfile(data)
    .done(ui.createProfileSuccess)
    .fail(ui.createProfileFailure);
  console.log(data);
};

const addHandlers = function() {
  $('#change-profile-btn').on('click', onChangeProfileClick);
  $('#new-profile').on('click', onNewProfileClick);
  // $('.profile-button').on('click', onProfileClick);
  $('#create-profile').on('submit', onCreateProfile);
};

module.exports = {
  addHandlers
};
