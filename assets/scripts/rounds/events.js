'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const onAddRoundClick = function () {
  ui.showAddRoundField();
};

const onCancelAddRoundClick = function () {
  ui.hideAddRoundField();
};

const onSubmitRound = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.profile_id = app.profile.id;
  api.createRound(data)
    .done(ui.createRoundSuccess)
    .fail(ui.createRoundFailure);

  // need to refresh board or only submit 1
};

const onViewRoundsClick = function (data) {
  data = app.profile.rounds;
  // console.log('app.profile.rounds is', data);
  ui.populateRounds(data);
  // api.indexRounds()
  //   .done(ui.populateRounds);
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
