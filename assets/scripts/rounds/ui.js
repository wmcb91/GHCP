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

const initialRoundsPopulation = function () {
  let roundsObject = roundsToObject();
  let max;
  if (app.profile.rounds.length < 15) {
    max = app.profile.rounds.length;
  } else {
    max = 15;}
  for (let i = 0; i < max; i++) {
    $("<tr class='profile-rounds rounds-row'>"+
              "<td class='large-field'>"+roundsObject[i].date_played+
              "</td><td class='huge-field'>"+roundsObject[i].course+
              "</td><td class='small-field'>"+roundsObject[i].rating+
              "</td><td class='small-field'>"+roundsObject[i].slope+
              "</td><td class='small-field'>"+roundsObject[i].par+
              "</td><td class='small-field'>"+roundsObject[i].score+
              "</td></tr>")
              .prependTo('.previous-rounds');
    }
};

const clearRounds = function () {
  $('.profile-rounds').html('');
};

const addMaxRound = function (data) {
  // console.log('addMaxRound fired');
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
  // console.log('deleted', $('.profile-rounds').last());
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
  $("<tr class='profile-rounds'><td>"+newRoundObject.date_played+
            "</td><td>"+newRoundObject.course+
            "</td><td>"+newRoundObject.rating+
            "</td><td>"+newRoundObject.slope+
            "</td><td>"+newRoundObject.par+
            "</td><td>"+newRoundObject.score+
            "</td></tr>").prependTo('.rounds-row');
};

// ON SUBMISSION OF VALID ROUND
const createRoundSuccess = function (data) {
  //Console
  // console.log('create round success run');
  app.round = data.round;
  // app.profile.rounds[app.profile.rounds.length] = data.round;
  app.profile.rounds.push(data.round);
  // console.log(app.profile.rounds);
  hideAddRoundField();
  // setTimeout(function(){addRound(app.round);}, 250);
  setTimeout(function(){clearRounds();}, 200);
  setTimeout(function(){initialRoundsPopulation();}, 250);
};

const createRoundFailure = function (error) {
  //Add error message
  console.log('Create round error is', error);
  return error;
};


//
// DELETION OF ROUNDS FUNCTIONS
//
const deleteRoundSuccess = function () {
  console.log('delete round successful');
};

const deleteLastRoundSuccess = function () {
  // TODO Change to make
  // Don't fade entire dash, just the table components
  $('.dashboard', 'h1').fadeOut(200);
  $('.profile-rounds').first().html('');
  setTimeout(function(){$('.dashboard').fadeIn(200);}, 300);
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
