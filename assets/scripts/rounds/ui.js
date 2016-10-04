'use strict';

const app = require('../app');
// const showRoundsTemplate = require('../templates/round-showing.handlebars');

const showAddRoundField = function () {
  $('#add-round').fadeIn(500);
};

const roundsToObject = function () {
  let roundsObject = app.profile.rounds.reduce(function(o, v, i) {
    o[i] = v;
    return o;
  }, {});
  return roundsObject;
};

const populateRounds = function () {
    let roundsObject = roundsToObject();
    for (let i = 0; i < app.profile.rounds.length; i++) {
      $('.previous-rounds')
        .prepend("<tr><td>"+roundsObject[i].date_played+
                "</td><td>"+roundsObject[i].course+
                "</td><td>"+roundsObject[i].rating+
                "</td><td>"+roundsObject[i].slope+
                "</td><td>"+roundsObject[i].par+
                "</td><td>"+roundsObject[i].score+
                "</td></tr>");
    }
};

const createRoundSuccess = function (data) {
  //Console
  console.log('create round success run');
  app.round = data.round;
  app.profile.rounds[app.profile.rounds.length] = data.round;
  //Console
  console.log(app.profile.rounds);
  populateRounds(app.profile.rounds);
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
  populateRounds,
};
