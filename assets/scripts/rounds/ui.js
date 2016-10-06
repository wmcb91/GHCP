'use strict';

const app = require('../app');
// const showRoundsTemplate = require('../templates/round-showing.handlebars');

//SHOW AND HIDE FOR ADDING ROUNDS
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
  let reverseRoundsObject = app.profile.rounds.reduce(function(o, v, i) {
    o[i] = v;
    return o;
  }, {});
  return reverseRoundsObject;
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

const addMaxRound = function (data) {
  console.log('addMaxRound fired');
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
  console.log('deleted', $('.profile-rounds').last());
};

// ON SUBMISSION OF VALID ROUND
const createMaxRoundSuccess = function (data) {
  //Console
  // console.log('create round success run');
  app.round = data.round;
  app.profile.rounds[app.profile.rounds.length] = data.round;
  // console.log(app.profile.rounds);
  hideAddRoundField();
  setTimeout(function(){addMaxRound(app.round);}, 250);
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

// ON SUBMISSION OF VALID ROUND
const createRoundSuccess = function (data) {
  //Console
  // console.log('create round success run');
  app.round = data.round;
  app.profile.rounds[app.profile.rounds.length] = data.round;
  // console.log(app.profile.rounds);
  hideAddRoundField();
  setTimeout(function(){addRound(app.round);}, 250);
};

const createRoundFailure = function (error) {
  //Add error message
  return error;
};

const deleteRoundSuccess = function () {
  console.log('delete round successful');
};

const roundsPopulation = function () {
  let roundsObject = roundsToObject();
  for (let i = 0; i < 15; i++) {
  // for (let i = 15; i > 0; i--) {
    $('.width-setter')
      .before("<tr class='profile-rounds'><td>"+roundsObject[i].date_played+
              "</td><td>"+roundsObject[i].course+
              "</td><td>"+roundsObject[i].rating+
              "</td><td>"+roundsObject[i].slope+
              "</td><td>"+roundsObject[i].par+
              "</td><td>"+roundsObject[i].score+
              "</td></tr>");
    }
};

const deleteLastRoundSuccess = function () {
  $('.dashboard').fadeOut(400);
  setTimeout(function(){clearRounds();}, 410);
  setTimeout(function(){roundsPopulation();}, 410);
  setTimeout(function(){$('.dashboard').fadeIn(500);}, 500);
};

module.exports = {
  showAddRoundField,
  hideAddRoundField,
  createMaxRoundSuccess,
  createRoundSuccess,
  addRound,
  createRoundFailure,
  initialRoundsPopulation,
  clearRounds,
  deleteRoundSuccess,
  deleteLastRoundSuccess,
};
