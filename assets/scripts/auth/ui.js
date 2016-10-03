'use strict';

const app = require('../app');

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

//
//SIGN IN
const signInSuccess = (data) => {
  //Stores current user data into app.user
  app.user = data.user;

  //UI response to sign in
  $('#sign-in-prompt').hide();
  // $('#user-welcome').show();
  $('#sign-in-failure').hide();

  if (app.user.profiles.length === 0) {
    setTimeout(function(){$('#chooseProfileModal').modal('show');}, 200);
  }
  if (app.user.profiles.length === 1) {
    app.profile = app.user.profiles[0];
    $('#user-welcome').fadeIn(100);
    $('#user-name-welcome').html(app.profile.given_name);
    setTimeout(function(){$('.dashboard').fadeIn(100);}, 50);
  }
  else {
    setTimeout(function(){$('#chooseProfileModal').modal('show');}, 350);
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
