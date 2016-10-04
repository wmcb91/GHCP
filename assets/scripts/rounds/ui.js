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
  let reverseRoundsObject = app.profile.rounds.reverse().reduce(function(o, v, i) {
    o[i] = v;
    return o;
  }, {});
  return reverseRoundsObject;
};

const initialRoundsPopulation = function () {
  let reverseRoundsObject = reverseRoundsToObject();
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

const clearRounds = function () {
  $('.profile-rounds').html('');
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
  $('.profile-rounds').last().remove();
};

// ON SUBMISSION OF VALID ROUND
const createRoundSuccess = function (data) {
  //Console
  console.log('create round success run');
  app.round = data.round;
  app.profile.rounds[app.profile.rounds.length] = data.round;
  console.log(app.profile.rounds);
  hideAddRoundField();
  setTimeout(function(){addRound(app.round);}, 250);
};

const createRoundFailure = function (error) {
  //Add error message
  return error;
};

module.exports = {
  showAddRoundField,
  hideAddRoundField,
  createRoundSuccess,
  addRound,
  createRoundFailure,
  initialRoundsPopulation,
  clearRounds,
};
