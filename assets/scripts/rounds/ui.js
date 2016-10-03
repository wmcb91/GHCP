'use strict';

const app = require('../app');
const showRoundsTemplate = require('../templates/round-showing.handlebars');

const showAddRoundField = function () {
  $('#add-round').fadeIn(500);
};

const printLatestRounds = function(rounds) {
  console.log('latest rounds are', app.profile.rounds);
  console.log('rounds are', rounds);
  $('.handlebars').html(showRoundsTemplate(rounds));
};

const createRoundSuccess = function (data) {
  app.round = data.round;
  app.profile.rounds[app.profile.rounds.length] = data.round;
  printLatestRounds(app.profile.rounds);
};

const createRoundFailure = function (error) {
  console.log('Create round failure is', error);
};

const indexRoundsFailure = function(error) {
  console.log('Error is', error);
};

module.exports = {
  showAddRoundField,
  createRoundSuccess,
  createRoundFailure,
  // indexRoundsSuccess,
  indexRoundsFailure,
  printLatestRounds,
};
