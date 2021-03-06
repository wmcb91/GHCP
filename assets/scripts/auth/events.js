'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const profileUI = require('../profile/ui');

const onSignUpClick = function () {
  ui.showSignUpModal();
};

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpfailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  $('#sign-in-warning').hide();

  api.signIn(data)
    .done(ui.signInSuccess, profileUI.populateProfiles)
    .fail(ui.signInFailure);
};

const onChangePasswordClick = function () {
  ui.showChangePassword();
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess, profileUI.clearProfiles)
    .fail(ui.failure);
};

const addHandlers = function() {
  $('#sign-up-link').on('click', onSignUpClick);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password-btn').on('click', onChangePasswordClick);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers
};
