'use strict';

const app = require('../app');
const roundsAPI = require('../rounds/api');
const roundsUI = require('../rounds/ui');

//SIGN UP
const signUpSuccess = () => {
  $('#signUpModal').modal('hide');
  $('#signUpSuccessModal').modal('show');

  //debug
  // console.log('Sign up success. Data is', data);
};

const signUpFailure = (error) => {
  // console.log(error);
  return error;
};


const hasNoProfiles = function () {
  setTimeout(function(){$('#chooseProfileModal').modal('show');}, 200);
};

const hasOneProfile = function () {
  app.profile = app.user.profiles[0];
  $('#user-welcome').fadeIn(100);
  $('#user-name-welcome').html(app.profile.given_name);
  setTimeout(function(){$('.dashboard').fadeIn(100);}, 50);
  roundsAPI.indexRounds()
    .done(roundsUI.indexRoundsSuccess)
    .fail(roundsUI.indexRoundsFailure);
};

const hasManyProfiles = function () {
  setTimeout(function(){$('#chooseProfileModal').modal('show');}, 350);
};

//
//SIGN IN
const signInSuccess = (data) => {
  //Stores current user data into app.user
  app.user = data.user;

  //UI response to sign in
  $('#sign-in-prompt').hide();
  $('#sign-in-failure').hide();

  if (app.user.profiles.length === 0) {
    hasNoProfiles();
  }
  if (app.user.profiles.length === 1) {
    hasOneProfile();
  }
  else {
    hasManyProfiles();
  }
};

const signInFailure = (error) => {
  $('#sign-in-failure').show();
  // console.error(error);
  return error;
};

//
//SIGN OUT
const signOutSuccess = () => {
  app.user = null;
  $('#user-welcome').hide();
  $('#game-container').hide();
  $('#sign-in-prompt').show();
  setTimeout(function(){$('.dashboard').fadeOut(100);}, 50);
  //debug
  // console.log('Sign Out Successful');
};

const signOutFailure = (error) => {
  // console.error(error);
  return error;
};


const showChangePassword = function () {
  $('#pwd-change-msg').hide();
  $('#changePasswordModal').modal('show');
  $('#change-password').show();
};

//change password
const changePasswordSuccess = () => {
  $('#change-password').hide();
  $('#pwd-change-msg').show();
  // console.log('Password Successfully Changed');
};

const changePasswordFailure = (error) => {
  // console.error(error);
  return error;
};

//Show sign in modal and hide sign-in-failure message if displayed
const showSignUpModal = function() {
  $('#signUpModal').modal('show');
  $('#sign-in-failure').hide();
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  showChangePassword,
  changePasswordSuccess,
  changePasswordFailure,
  showSignUpModal,
};
