'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const onAddRoundClick = function () {
  ui.showAddRoundField();
  console.log(app.profile.rounds.length);
};

const onCancelAddRoundClick = function () {
  ui.hideAddRoundField();
};

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

const onViewRoundsClick = function (data) {
  data = app.profile.rounds;
  ui.initialRoundsPopulation(data);
};

const addHandlers = function() {
  $('.add').on('click', onAddRoundClick);
  $('.cancel').on('click', onCancelAddRoundClick);
  $('#add-round').on('submit', onSubmitRound);
  $('#view-rounds').on('click', onViewRoundsClick);
};

module.exports = {
  addHandlers
};
