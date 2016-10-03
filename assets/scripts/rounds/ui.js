'use strict';

const app = require('../app');

const showAddRoundField = function () {
  $('#add-round').fadeIn(500);
};

const createRoundSuccess = function (data) {
  app.round = data.round;

  // app.profile.rounds[app.profile.rounds.length] = data.round;

  console.log(app.profile.rounds);
};

const createRoundFailure = function (error) {
  console.log('Create round failure is', error);
};

module.exports = {
  showAddRoundField,
  createRoundSuccess,
  createRoundFailure,
};
