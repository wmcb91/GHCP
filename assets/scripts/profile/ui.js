'use strict';

const app = require('../app');

const profilesToObject = function () {
  let profilesObject = app.user.profiles.reduce(function(o, v, i) {
    o[i] = v;
    return o;
  }, {});
  return profilesObject;
};

const populateProfiles = function () {
  let profilesObject = profilesToObject();
  // console.log(profilesObject[1]);
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
  }
};

const selectProfile = function (data) {
  app.profile = data;
  $('#chooseProfileModal').modal('hide');
  $('#user-welcome').show();
  $('#user-name-welcome').html(app.profile.given_name);
  // Trigger populateRounds


  setTimeout(function(){$('.dashboard').fadeIn(600);}, 150);
};

const showChangeProfile = function () {
  console.log(app.user.profiles);
  $('#chooseProfileModal').modal('show');
};

const showCreateProfile = function () {
// CHANGE TO JUST ONE MODAL with different DIVS
  $('#chooseProfileModal').modal('hide');
  setTimeout(function(){$('#createProfileModal').modal('show');}, 150);
  $('#profile-created-msg').hide();
};

const createProfileSuccess = function (data) {
  app.profile = data.profile;
  // Show welcome function here
  $('#createProfileModal').modal('hide');
  $('#user-welcome').show();
  $('#user-name-welcome').html(app.profile.given_name);

  //Create message about adding rounds and trigger it

  setTimeout(function(){$('.dashboard').fadeIn(600);}, 150);

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
  selectProfile,
  showChangeProfile,
  showCreateProfile,
  createProfileSuccess,
  createProfileFailure,
};
