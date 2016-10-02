'use strict';

const api = require('./api');
const ui = require('./ui');

const onChangePasswordClick = function () {
  ui.showChooseProfile();
};

const addHandlers = function() {
  $('#choose-profile-btn').on('click', onChangePasswordClick);
};

module.exports = {
  addHandlers
};
