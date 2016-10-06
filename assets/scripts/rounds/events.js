'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
// const profileAPI = require('../profile/api');
const ui = require('./ui');
// const profileUI = require('../profile/ui');
const app = require('../app');

const onAddRoundClick = function () {
  ui.showAddRoundField();
  console.log(app.profile.rounds.length);
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
    console.log('fewer than 15 rounds');
    api.createRound(data)
      .done(ui.createRoundSuccess)
      .fail(ui.createRoundFailure);
    return;
  }
  else {
    console.log('more than 15 rounds');
    api.createRound(data)
      .done(ui.createMaxRoundSuccess)
      .fail(ui.createRoundFailure);
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
const onDeleteLastRound = function () {
  let roundID = (app.profile.rounds[0].id);
  api.destroyRound(roundID)
    .done(ui.deleteRoundSuccess, app.profile.rounds.shift());
  ui.deleteLastRoundSuccess();
};

const addHandlers = function() {
  $('.add').on('click', onAddRoundClick);
  $('.cancel').on('click', onCancelAddRoundClick);
  $('#add-round').on('submit', onSubmitRound);
  $('#view-rounds').on('click', onViewRoundsClick);
  $('#delete-last-round').on('click', onDeleteLastRound);
};

module.exports = {
  addHandlers
};
