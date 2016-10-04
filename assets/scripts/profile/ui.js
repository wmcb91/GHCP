'use strict';

const app = require('../app');
const roundsUI = require('../rounds/ui');

const profilesToObject = function () {
  let profilesObject = app.user.profiles.reduce(function(o, v, i) {
    o[i] = v;
    return o;
  }, {});
  return profilesObject;
};

const populateProfiles = function () {
  let profilesObject = profilesToObject();
  //switch show to toggle
  // Should not use for loop, oh well...
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

const clearProfiles = function () {
  $('.profile-button').html('');
  $('.profile-button').hide();
};

// CALLED BY ONPROFILE SELECTION
// SETS APP.PROFILE and CHANGES UI
const selectProfileSuccess = function (data) {
  app.profile = data;
  $('#chooseProfileModal').modal('hide');
  $('#changeProfileModal').modal('hide');
  $('#user-welcome').show();
  $('#user-name-welcome').html(app.profile.given_name);
  // Trigger populateRounds
  roundsUI.clearRounds();
  roundsUI.populateRounds();
  setTimeout(function(){$('.dashboard').fadeIn(500);}, 150);
};

const showChangeProfile = function () {
  $('.create-profile-modal').hide();
  $('.choose-profile-modal').show();
  $('#changeProfileModal').modal('show');
};

const showCreateProfile = function () {
// CHANGE TO JUST ONE MODAL with different DIVS
  $('.choose-profile-modal').hide();
  setTimeout(function(){$('.create-profile-modal').fadeIn(300);}, 10);
  $('.profile-created-msg').hide();
};

const backClickSuccess = function () {
  $('.create-profile-modal').hide();
  setTimeout(function(){$('.choose-profile-modal').fadeIn(300);}, 10);
};

const createProfileSuccess = function (data) {
  //update app.profile to be current profile
  app.profile = data.profile;
  // Show welcome function here
  $('#createProfileModal').modal('hide');
  $('#user-welcome').show();
  $('#user-name-welcome').html(app.profile.given_name);

  //Create message about adding rounds and trigger it

  //Show user's dashboard
  roundsUI.clearRounds();
  roundsUI.populateRounds();
  setTimeout(function(){$('.dashboard').fadeIn(500);}, 150);

// debug
  // console.log('App.profile is', app.profile);
};

const createProfileFailure = function (error) {
  // create error message for UI
  return error;
  // console.log('Error is', error);
};

module.exports = {
  populateProfiles,
  clearProfiles,
  selectProfileSuccess,
  showChangeProfile,
  showCreateProfile,
  backClickSuccess,
  createProfileSuccess,
  createProfileFailure,
};
