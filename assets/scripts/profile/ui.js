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
  // Trigger initialRoundsPopulation
  $('.dashboard').fadeOut(400);
  setTimeout(function(){roundsUI.clearRounds();}, 410);
  setTimeout(function(){roundsUI.initialRoundsPopulation();}, 410);
  setTimeout(function(){$('.dashboard').fadeIn(400);}, 500);
};


const showChangeProfile = function () {
  $('.create-profile-modal').hide();
  $('.choose-profile-modal').show();
  $('#changeProfileModal').modal('show');
};

const showCreateProfile = function () {
// CHANGE TO JUST ONE MODAL with different DIVS
  $('.create-profile').hide();
  $('.choose-profile-modal').hide();
  $('.create-profile').show();
  setTimeout(function(){$('.create-profile-modal').fadeIn(300);}, 10);

};

const showChooseProfile = function () {
  $('.create-profile-modal').hide();
  $('.choose-profile-modal').show();
  $('#chooseProfileModal').modal('show');
};

const backClickSuccess = function () {
  $('.create-profile-modal').hide();
  setTimeout(function(){$('.choose-profile-modal').fadeIn(300);}, 10);
};


const createProfileSuccess = function (data) {
  //update app.profile to be current profile
  app.profile = data.profile;
  // Show welcome function here
  $('.create-profile').hide();
  $('.create-profile-modal').hide();
  setTimeout(function(){$('#chooseProfileModal').modal('hide');}, 200);
  setTimeout(function(){$('#changeProfileModal').modal('hide');}, 200);
  setTimeout(function(){$('.choose-profile-modal').show();}, 400);
  $('#user-welcome').show();
  $('#user-name-welcome').html(app.profile.given_name);

  //Create message about adding rounds and trigger it

  //Show user's dashboard
  $('.dashboard').fadeOut(400);
  setTimeout(function(){roundsUI.clearRounds();}, 410);
  setTimeout(function(){roundsUI.initialRoundsPopulation();}, 410);
  setTimeout(function(){$('.dashboard').fadeIn(500);}, 500);


  // roundsUI.clearRounds();
  // roundsUI.initialRoundsPopulation();
  // setTimeout(function(){$('.dashboard').fadeIn(500);}, 2150);

// debug
  // console.log('App.profile is', app.profile);
};

const createProfileFailure = function (error) {
  // create error message for UI
  return error;
  // console.log('Error is', error);
};

const showConfirmDelete = function () {
  $('#confirmDeleteModal').modal('show');
};

const hideConfirmDelete = function () {
  $('#confirmDeleteModal').modal('hide');
};

const deleteProfileSuccess = function () {
  $('#confirmDeleteModal').modal('hide');
  $('#user-welcome').fadeOut(300);
  $('#user-name-welcome').html('');
  setTimeout(function(){$('.dashboard').fadeOut(500);}, 300);
  // setTimeout(function(){$('#chooseProfileModal').modal('show');}, 750);
};

const deleteProfileFailure = function (error) {
  console.log('deleteProfile error is', error);
};

// Move this and other 'updates' out of UI directories
// const updateProfile = function (data) {
//   console.log('data is', data);
//   console.log('app.profile before setting is', app.profile);
//   app.profile = data.profile;
//   console.log('app.profile after setting is', app.profile);
// };

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
  // updateProfile,
};
