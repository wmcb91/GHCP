'use strict';

const app = require('../app');
const roundsUI = require('../rounds/ui');
const handicap = require('../rounds/handicap-calculations');

const profilesToObject = function() {
  let profilesObject = app.user.profiles.reduce(function(object, values, index) {
    object[index] = values;
    return object;
  }, {});
  return profilesObject;
};

const populateProfiles = function() {
  let profilesObject = profilesToObject();
  for (let i = 0; i < app.user.profiles.length; i++) {
    $('#'+i)
      .html(
        "<h3 class='profile-text'>"+
        profilesObject[i].given_name+
        "</h3><h4 class='profile-text'>"+
        profilesObject[i].surname+
        "</h4><h6 class='profile-club'>"+
        profilesObject[i].home_course+
        "</h6></button>");
    $('#'+i).show();
    $('#'+i+i)
      .html(
        "<h3 class='profile-text'>"+
        profilesObject[i].given_name+
        "</h3><h4 class='profile-text'>"+
        profilesObject[i].surname+
        "</h4><h6 class='profile-club'>"+
        profilesObject[i].home_course+
        "</h6></button>");
    $('#'+i+i).show();
  }
};

const clearProfiles = function() {
  $('.profile-button').html('');
  $('.profile-button').hide();
};

// SETS APP.PROFILE and CHANGES UI
const selectProfileSuccess = function(data) {
  app.profile = data;
  $('#chooseProfileModal').modal('hide');
  $('#changeProfileModal').modal('hide');
  $('#user-welcome').show();
  $('#user-name-welcome').html(app.profile.given_name);
  // Trigger populateRounds
  $('.dashboard').fadeOut(250);
  if (app.profile.rounds.length > 5) {
    $('.greeting-message').fadeOut(250);
  } else {
    setTimeout(function(){$('.greeting-message').show();}, 300);
  }
  setTimeout(function(){handicap.updateProfileStats();}, 260);
  setTimeout(function(){roundsUI.clearRounds();}, 260);
  setTimeout(function(){roundsUI.populateRounds();}, 270);
  setTimeout(function(){$('.dashboard').fadeIn(250);}, 300);
};


const showChangeProfile = function() {
  $('.create-profile-modal').hide();
  $('.choose-profile-modal').show();
  $('#changeProfileModal').modal('show');
};

const showCreateProfile = function() {
  $('.create-profile').hide();
  $('.choose-profile-modal').hide();
  $('.create-profile').show();
  setTimeout(function(){$('.create-profile-modal').fadeIn(300);}, 10);
};

const showChooseProfile = function() {
  $('.create-profile-modal').hide();
  $('.choose-profile-modal').show();
  $('#chooseProfileModal').modal('show');
};

const backClickSuccess = function() {
  $('.create-profile-modal').hide();
  setTimeout(function(){$('.choose-profile-modal').fadeIn(300);}, 10);
};


const createProfileSuccess = function(data) {
  // Update app.profile to be current profile
  app.profile = data.profile;
  // Show welcome function here
  $('.create-profile').hide();
  $('.create-profile-modal').hide();
  setTimeout(function(){$('#chooseProfileModal').modal('hide');}, 200);
  setTimeout(function(){$('#changeProfileModal').modal('hide');}, 200);
  setTimeout(function(){$('.choose-profile-modal').show();}, 400);
  $('#user-welcome').show();
  $('#user-name-welcome').html(app.profile.given_name);

  //Show user's dashboard
  $('.dashboard').fadeOut(250);
  setTimeout(function(){$('.greeting-message').show();}, 300);
  setTimeout(function(){handicap.updateProfileStats();}, 260);
  setTimeout(function(){roundsUI.clearRounds();}, 260);
  setTimeout(function(){roundsUI.populateRounds();}, 270);
  setTimeout(function(){$('.dashboard').fadeIn(250);}, 300);
};

const createProfileFailure = function(error) {
  return error;
};

const showConfirmDelete = function() {
  $('#confirmDeleteModal').modal('show');
};

const hideConfirmDelete = function() {
  $('#confirmDeleteModal').modal('hide');
};

const deleteProfileSuccess = function() {
  $('#confirmDeleteModal').modal('hide');
  $('#user-welcome').fadeOut(300);
  $('#user-name-welcome').html('');
  setTimeout(function(){$('.dashboard').fadeOut(500);}, 300);
};

const deleteProfileFailure = function(error) {
  return error;
};

const showEditProfile = function() {
  $('#editProfileModal').modal('show');
};

const updateProfileSuccess = function() {
  $('#user-name-welcome').html(app.profile.given_name);
  populateProfiles();
  setTimeout(function(){$('#editProfileModal').modal('hide');}, 150);
};

const updateProfileFailure = function(error) {
  return error;
};

module.exports = {
  populateProfiles,
  clearProfiles,
  selectProfileSuccess,
  showChangeProfile,
  showChooseProfile,
  showCreateProfile,
  backClickSuccess,
  createProfileSuccess,
  createProfileFailure,
  showConfirmDelete,
  hideConfirmDelete,
  deleteProfileSuccess,
  deleteProfileFailure,
  showEditProfile,
  updateProfileSuccess,
  updateProfileFailure,
};
