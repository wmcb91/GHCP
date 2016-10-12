'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
// const profileAPI = require('../profile/api');
const ui = require('./ui');
// const profileUI = require('../profile/ui');
const app = require('../app');

const onAddRoundClick = function () {
  ui.showAddRoundField();
};

const onCancelAddRoundClick = function () {
  ui.hideAddRoundField();
};

//PRESS SUBMIT BUTTON AFTER ENTERING ROUND DATA
const onSubmitRound = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.profile_id = app.profile.id;

  if (app.profile.rounds.length < 15) {
    // console.log('fewer than 15 rounds');
    api.createRound(data)
      .done(ui.createRoundSuccess)
      .fail(ui.createRoundFailure);
      setTimeout(function(){console.log('rounds are now', app.profile.rounds);}, 2500);
    return;
  }
  else {
    // console.log('more than 15 rounds');
    api.createRound(data)
      .done(ui.createMaxRoundSuccess)
      .fail(ui.createRoundFailure);
      setTimeout(function(){console.log('rounds are now', app.profile.rounds);}, 2500);
  }

};
//

// I don't think data is necessary as an argument.
const onViewRoundsClick = function (data) {
  data = app.profile.rounds;
  ui.initialRoundsPopulation(data);
};
//

// PRESS DELETE LAST ROUND BUTTON
// Current BUG:
// - Issue when deleting round after creating rounds.
// - Deletes round at top of table before creating rounds
// - Newest round added to end of array when next 'newest' round is the 0th index
// Options:
// - Do not flip array ever, just find out how to print array correctly
// - Use .unshift() method to put new round in beginning of array
// - Flip array back to order matching API before adding new round.

const onDeleteLastRound = function () {
  let roundID = (app.profile.rounds[0].id);
  api.destroyRound(roundID)
    .done(ui.deleteRoundSuccess, app.profile.rounds.shift());
  ui.deleteLastRoundSuccess();
  setTimeout(function(){console.log('rounds are now', app.profile.rounds);}, 2500);
};

// const logRounds = function () {
//   console.log('rounds are', app.profile.rounds);
// };

const addHandlers = function() {
  $('.add').on('click', onAddRoundClick);
  $('.cancel').on('click', onCancelAddRoundClick);
  $('#add-round').on('submit', onSubmitRound);
  $('#view-rounds').on('click', onViewRoundsClick);
  $('#delete-last-round').on('click', onDeleteLastRound);
  // $('#edit-profile-btn').on('click', logRounds);
};

module.exports = {
  addHandlers
};
