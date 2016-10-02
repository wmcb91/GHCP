'use strict';

const showChangePassword = function () {
  $('#pwd-change-msg').hide();
  $('#chooseProfileModal').modal('show');
  $('#change-password').show();
};

module.exports = {
  showChangePassword,
};
