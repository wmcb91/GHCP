'use strict';

const app = require('../app');
// const showRoundsTemplate = require('../templates/book-listing.handlebars');

const showAddRoundField = function () {
  $('#add-round').fadeIn(500);
};

const createRoundSuccess = function (data) {
  app.round = data.round;

  app.profile.rounds[app.profile.rounds.length] = data.round;

  console.log(app.profile.rounds);
};

const createRoundFailure = function (error) {
  console.log('Create round failure is', error);
};

const indexRoundsSuccess = function(rounds) {
  console.log('Rounds are', rounds);
  console.log(app.profile.rounds);
  console.log(app.profile.id);
  console.log(app.profile.rounds.length);
  // for (let i = 0, max = rounds.length; i < max;  i++) {
  //
  // }
  // $('#content').html(showRoundsTemplate(rounds));
};

const indexRoundsFailure = function(error) {
  console.log('Error is', error);
};

module.exports = {
  showAddRoundField,
  createRoundSuccess,
  createRoundFailure,
  indexRoundsSuccess,
  indexRoundsFailure,
};
