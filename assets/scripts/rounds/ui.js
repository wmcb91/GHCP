'use strict';

const app = require('../app');

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
  let roundsObject = app.profile.rounds.reduce(function(o, v, i) {
    o[i] = v;
    return o;
  }, {});
  return roundsObject;
};

// const populateRounds = function () {
//   let roundsObject = roundsToObject();
//   let max;
//     max = app.profile.rounds.length;
//   for (let i = 0; i < max; i++) {
//     $("<tr class='profile-rounds rounds-row'>"+
//               "<td class='large-field'>"+roundsObject[i].date_played+
//               "</td><td class='huge-field'>"+roundsObject[i].course+
//               "</td><td class='small-field'>"+roundsObject[i].rating+
//               "</td><td class='small-field'>"+roundsObject[i].slope+
//               "</td><td class='small-field'>"+roundsObject[i].par+
//               "</td><td class='small-field'>"+roundsObject[i].score+
//               "</td></tr>")
//               .prependTo('.previous-rounds');
//     }
// };

const populateRounds = function () {
  let roundsObject = roundsToObject();
  let max;
    max = app.profile.rounds.length;
  for (let i = 0; i < max; i++) {
    $("<tr class='profile-rounds rounds-row'>"+
              "<td class='medium-field'>"+roundsObject[i].date_played+
              "</td><td class='huge-field'>"+roundsObject[i].course+
              "</td><td class='small-field'>"+roundsObject[i].rating+
              "</td><td class='small-field'>"+roundsObject[i].slope+
              "</td><td class='small-field'>"+roundsObject[i].par+
              "</td><td class='small-field'>"+roundsObject[i].score+
              "</td></tr>")
              .appendTo('.previous-rounds');
    }
};

const clearRounds = function () {
  $('.profile-rounds').remove();
};

const addMaxRound = function (data) {
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
const createMaxRoundSuccess = function (data) {
  app.round = data.round;
  app.profile.rounds[app.profile.rounds.length] = data.round;
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
  console.log('data returned is', data);
  app.profile = data.profile;
  // app.round = data.round;
  // app.profile.rounds.push(data.round);
  // if (app.profile.rounds.length === 15) {
  //   $('.previous-rounds').wrap("div class='previous-rounds-table'></div>");
  // }

  hideAddRoundField();
  setTimeout(function(){clearRounds();}, 200);
  setTimeout(function(){populateRounds();}, 250);
};

const createRoundFailure = function (error) {
  return error;
};


// ADD BACK AT LATER DATE ONCE FIGURED OUT
//
// DELETE ROUNDS FUNCTION
// const deleteLastRoundSuccess = function () {
//   // TODO Change to make
//   // Don't fade entire dash, just the table components
//   $('.dashboard', 'h1').fadeOut(200);
//
//   $('.profile-rounds').first().remove();
//   setTimeout(function(){$('.dashboard').fadeIn(200);}, 300);
// };

module.exports = {
  showAddRoundField,
  hideAddRoundField,
  createMaxRoundSuccess,
  createRoundSuccess,
  addRound,
  createRoundFailure,
  populateRounds,
  clearRounds,
  // deleteLastRoundSuccess,
};
