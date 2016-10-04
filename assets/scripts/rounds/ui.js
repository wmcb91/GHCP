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

const reverseRoundsToObject = function () {
  let roundsObject = app.profile.rounds.reverse().reduce(function(o, v, i) {
    o[i] = v;
    return o;
  }, {});
  return roundsObject;
};

// const roundsToObject = function () {
//   // console.log('reverse is', app.profile.rounds.reverse());
//   let roundsObject = app.profile.rounds.reduce(function(o, v, i) {
//     o[i] = v;
//     return o;
//   }, {});
//   return roundsObject;
// };

const populateRounds = function () {
  let reverseRoundsObject = reverseRoundsToObject();
  console.log(' reverseRoundsObject is',reverseRoundsObject[0]);
  console.log(' reverseRoundsObject is',reverseRoundsObject[1]);
  console.log(' reverseRoundsObject is',reverseRoundsObject[app.profile.rounds.length-2]);
  console.log(' reverseRoundsObject is',reverseRoundsObject[app.profile.rounds.length-1]);
  // let max = app.profile.rounds.length - 1;
  // let min = app.profile.rounds.length - 15;
  // for (let i = 0; i < app.profile.rounds.length; i++) {
  // let max = app.profile.rounds.length;
  for (let i = 0; i < 15; i++) {
  // for (let i = 15; i > 0; i--) {
    $('.width-setter')
      .before("<tr class='profile-rounds'><td>"+reverseRoundsObject[i].date_played+
              "</td><td>"+reverseRoundsObject[i].course+
              "</td><td>"+reverseRoundsObject[i].rating+
              "</td><td>"+reverseRoundsObject[i].slope+
              "</td><td>"+reverseRoundsObject[i].par+
              "</td><td>"+reverseRoundsObject[i].score+
              "</td></tr>");
    }
};

const addRound = function (data) {
  let newRoundObject = data;
  $('.previous-rounds')
    .prepend("<tr class='profile-rounds'><td>"+newRoundObject.date_played+
            "</td><td>"+newRoundObject.course+
            "</td><td>"+newRoundObject.rating+
            "</td><td>"+newRoundObject.slope+
            "</td><td>"+newRoundObject.par+
            "</td><td>"+newRoundObject.score+
            "</td></tr>");
};

const clearRounds = function () {
  $('.profile-rounds').html('');
};

const addRoundSuccess = function () {
  clearRounds();
  populateRounds();
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
  setTimeout(function(){addRound(app.round);}, 250);
  // setTimeout(function(){clearRounds();}, 250);
  // setTimeout(function(){populateRounds(app.profile.rounds);}, 250);
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
  addRound,
  addRoundSuccess,
  createRoundFailure,
  // indexRoundsSuccess,
  indexRoundsFailure,
  populateRounds,
  clearRounds,
};
