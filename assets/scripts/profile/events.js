  'use strict';
//PROFILE EVENTS

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const onProfileClick = function () {
  ui.selectProfile();
};

const onNewProfileClick = function () {
  ui.showCreateProfile();
};

const onCreateProfile = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.user_id = app.user.id;
  api.createProfile(data)
    .done(ui.createProfileSuccess)
    .fail(ui.createProfileFailure);
};

const onChangeProfileClick = function () {
  ui.populateProfiles();
  ui.showChangeProfile();
};

const addHandlers = function() {
  $('#change-profile-btn').on('click', onChangeProfileClick);
  $('#new-profile').on('click', onNewProfileClick);
  $('.profile-button').on('click', onProfileClick);
  $('#create-profile').on('submit', onCreateProfile);
};

module.exports = {
  addHandlers
};
