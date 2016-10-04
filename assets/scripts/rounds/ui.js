'use strict';

const app = require('../app');
// const showRoundsTemplate = require('../templates/round-showing.handlebars');

const showAddRoundField = function () {
  $('.add').hide();
  $('.cancel').fadeIn(500);
  $('#add-round').fadeIn(500);
};

const hideAddRoundField = function () {
  $('.cancel').hide();
  $('.add').fadeIn(500);
  $('#add-round').fadeOut(250);
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
        .prepend("<tr class='profile-rounds'><td>"+roundsObject[i].date_played+
                "</td><td>"+roundsObject[i].course+
                "</td><td>"+roundsObject[i].rating+
                "</td><td>"+roundsObject[i].slope+
                "</td><td>"+roundsObject[i].par+
                "</td><td>"+roundsObject[i].score+
                "</td></tr>");
    }
};

const clearRounds = function () {
  $('.profile-rounds').html('');
};

// ON SUBMISSION OF VALID ROUND
const createRoundSuccess = function (data) {
  //Console
  console.log('create round success run');
  app.round = data.round;
  app.profile.rounds[app.profile.rounds.length] = data.round;
  //Console
  console.log(app.profile.rounds);
  hideAddRoundField();
  setTimeout(function(){clearRounds();}, 250);
  setTimeout(function(){populateRounds(app.profile.rounds);}, 250);
};

const createRoundFailure = function (error) {
  //Add error message
  // console.log('Create round failure is', error);
  return error;
};

const indexRoundsFailure = function(error) {
  // console.log('Error is', error);
  return error;
};

module.exports = {
  showAddRoundField,
  hideAddRoundField,
  createRoundSuccess,
  createRoundFailure,
  // indexRoundsSuccess,
  indexRoundsFailure,
  populateRounds,
  clearRounds,
};
