'use strict';

// const api = require('./api');
const ui = require('./ui');

const onChangeProfileClick = function () {
  ui.showChangeProfile();

  // DEBUG
  console.log('Change profile button click heard');
};

const onNewProfileClick = function () {
  ui.showCreateProfile();

  // DEBUG
  console.log('Profile click heard');
};

const addHandlers = function() {
  $('#change-profile-btn').on('click', onChangeProfileClick);
  $('#new-profile').on('click', onNewProfileClick);
  // $('.profile-button').on('click', onProfileClick);
};

module.exports = {
  addHandlers
};
