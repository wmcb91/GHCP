  'use strict';
//PROFILE EVENTS

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const onProfileClick = function () {
  console.log('click heard');
  console.log('class is', $('.profile-button').attr('class'));
  console.log('id is', $('.profile-button').attr('id'));
  console.log('id is', $('.profile-button').get(0).id);
  console.log('id is', $('.profile-button')[0].id);

  // ui.selectProfile();
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

const onChangeProfileButtonClick = function () {
  ui.populateProfiles();
  ui.showChangeProfile();
};

const addHandlers = function() {
  $('#change-profile-btn').on('click', onChangeProfileButtonClick);
  $('#new-profile').on('click', onNewProfileClick);
  //how to get id of button sent as parameter?
  $('.profiles').on('click', '.profileElement', onProfileClick);
  $('#create-profile').on('submit', onCreateProfile);
};

module.exports = {
  addHandlers
};
