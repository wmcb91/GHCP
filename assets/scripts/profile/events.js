  'use strict';
//PROFILE EVENTS

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const authAPI = require('../auth/api');
const ui = require('./ui');
const authUI = require('../auth/ui');
const app = require('../app');

const onProfileSelection = function (event) {
  event.preventDefault();
  let index = event.data.index;
  let data = app.user.profiles[index];
  ui.selectProfileSuccess(data);
  console.log('rounds to begin are', app.profile.rounds);
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
  authAPI.getUser()
    .done(authUI.updateUserProfiles, ui.populateProfiles);
    // Add .fail later
};

const onChangeProfileButtonClick = function () {
  authAPI.getUser()
    .done(authUI.updateUserProfiles, ui.populateProfiles);
  ui.populateProfiles();
  ui.showChangeProfile();
};

const onBackButtonClick = function () {
  ui.backClickSuccess();
};

const onClickDeleteProfile = function(event) {
  event.preventDefault();
  ui.showConfirmDelete();
};

const onDeleteProfileReject = function(event) {
  event.preventDefault();
  ui.hideConfirmDelete();
};

const onDeleteProfileConfirm = function(event) {
  event.preventDefault();
  api.destroyProfile()
    .done(ui.deleteProfileSuccess)
    .fail(ui.deleteProfileFailure);
  setTimeout(function(){$(authAPI.getUser()
    .done(authUI.updateUserProfiles, ui.populateProfiles));}, 75);
  setTimeout(function(){$(ui.clearProfiles());}, 125);
  setTimeout(function(){$(ui.populateProfiles());}, 200);
  setTimeout(function(){$(ui.showChooseProfile());}, 850);
};

const onEditProfileButtonClick = function() {
  ui.showEditProfile();
};

const onUpdateProfileSubmit = function(event) {
  event.preventDefault();
  let data = app.profile;
  let form = getFormFields(event.target);
  if (form.given_name !== '') {
     data.given_name = form.given_name;
   }
  if (form.surname !== '') {
     data.surname = form.surname;
   }
  if (form.home_course !== '') {
     data.home_course = form.home_course;
   }
  api.updateProfile(data)
    .done(ui.updateProfileSuccess)
    .fail(ui.updateProfileFailure);
};


const addHandlers = function() {
  $('#change-profile-btn').on('click', onChangeProfileButtonClick);
  $('.new-profile-button').on('click', onNewProfileClick);
  $('.create-profile').on('submit', onCreateProfile);
  $('#back-btn').on('click', onBackButtonClick);
  $('.delete-profile-btn').on('submit', onClickDeleteProfile);
  $('#no-delete').on('click', onDeleteProfileReject);
  $('#delete-profile').on('click', onDeleteProfileConfirm);
  $('#edit-profile-btn').on('click', onEditProfileButtonClick);
  $('.update-profile').on('submit', onUpdateProfileSubmit);


  // how to get id of button sent as parameter?
  // Profile buttons
  $('#0').on('click', {index: 0}, onProfileSelection);
  $('#1').on('click', {index: 1}, onProfileSelection);
  $('#2').on('click', {index: 2}, onProfileSelection);
  $('#3').on('click', {index: 3}, onProfileSelection);
  $('#4').on('click', {index: 4}, onProfileSelection);
  $('#00').on('click', {index: 0}, onProfileSelection);
  $('#11').on('click', {index: 1}, onProfileSelection);
  $('#22').on('click', {index: 2}, onProfileSelection);
  $('#33').on('click', {index: 3}, onProfileSelection);
  $('#44').on('click', {index: 4}, onProfileSelection);
};

module.exports = {
  addHandlers
};
