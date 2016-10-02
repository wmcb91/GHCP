'use strict';

const showChangeProfile = function () {
  $('#changeProfileModal').modal('show');

  // DEBUG
  console.log('Change profile event fired');
};

const showCreateProfile = function () {
// CHANGE TO JUST ONE MODAL with different DIVS
  $('#changeProfileModal').modal('hide');
  $('#createProfileModal').modal('show');
  $('#profile-created-msg').hide();
  // DEBUG
  console.log('New profile event fired');
};

module.exports = {
  showChangeProfile,
  showCreateProfile
};
