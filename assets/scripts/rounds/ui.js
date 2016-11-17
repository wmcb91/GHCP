'use strict';

const app = require('../app');
const handicap = require('./handicap-calculations');

//SHOW AND HIDE FOR ADDING ROUNDS
const showAddRoundField = function () {
  $('.add').hide();
  $('.date').addClass('large-field');
  $('.date-played').addClass('large-field');
  $('.cancel').fadeIn(500);
  $('.submit-round').show();
  $('#add-round').fadeIn(500);
};

const hideAddRoundField = function () {
  $('.cancel').hide();
  $('.date').removeClass('large-field');
  $('.date-played').removeClass('large-field');
  $('.add').fadeIn(500);
  $('.submit-round').hide();
  $('#add-round').fadeOut();
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
  let max;
    max = app.profile.rounds.length;
  for (let i = 0; i < max; i++) {
    $("<tr class='profile-rounds rounds-row'>"+
              "<td class='date medium-field'>"+roundsObject[i].date_played+
              "</td><td class='huge-field'>"+roundsObject[i].course+
              "</td><td class='small-field'>"+roundsObject[i].rating+
              "</td><td class='small-field'>"+roundsObject[i].slope+
              "</td><td class='small-field'>"+roundsObject[i].par+
              "</td><td class='small-field'>"+roundsObject[i].score+
              // "</td><td class='small-field'>"+roundsObject[i].differential+
              "</td></tr>")
              .appendTo('.previous-rounds');
    }
  if (app.profile.rounds.length >= 5) {
    setTimeout(function(){$('.greeting-message').hide();}, 300);
    setTimeout(function(){$('.profile-stats').show();}, 300);
  }
};

const clearRounds = function () {
  $('.profile-rounds').remove();
};



// ON SUBMISSION OF VALID ROUND
const createRoundSuccess = function (data) {
  app.profile = data.profile;
  handicap.updateProfileStats();
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
  createRoundSuccess,
  createRoundFailure,
  populateRounds,
  clearRounds,
  // deleteLastRoundSuccess,
};
