'use strict';

const app = require('../app');
// const roundsAPI = require('../rounds/api');
// const roundsUI = require('../rounds/ui');

//SIGN UP
const signUpSuccess = () => {
  $('#signUpModal').modal('hide');
  $('#signUpSuccessModal').modal('show');
};

const signUpFailure = (error) => {
  // create warning message
  return error;
};


// const hasNoProfiles = function () {
//   setTimeout(function(){$('#chooseProfileModal').modal('show');}, 200);
// };

// const hasOneProfile = function () {
//   app.profile = app.user.profiles[0];
//   $('#user-welcome').fadeIn(100);
//   $('#user-name-welcome').html(app.profile.given_name);
//   roundsUI.initialRoundsPopulation(app.profile.rounds);
//   setTimeout(function(){$('.dashboard').fadeIn(100);}, 100);
// };
//
// const hasManyProfiles = function () {
//
// };

//
//SIGN IN
const signInSuccess = (data) => {
  //Stores current user data into app.user
  app.user = data.user;

  //UI response to sign in
  $('#sign-in-prompt').hide();
  $('#sign-in-failure').hide();
  setTimeout(function(){$('#chooseProfileModal').modal('show');}, 350);
};

const signInFailure = (error) => {
  $('#sign-in-failure').show();
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

const updateUserProfiles = function (data) {
  console.log('app.user.profiles before setting is', app.user.profiles);
  app.user.profiles = data.user.profiles;
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
  updateUserProfiles,
};
