'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const onAddRoundClick = function () {
  ui.showAddRoundField();
};

const onSubmitRound = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.profile_id = app.profile.id;
  api.createRound(data)
    .done(ui.createRoundSuccess)
    .fail(ui.createRoundFailure);
};

const addHandlers = function() {
  $('.add-round-btn').on('click', onAddRoundClick);
  $('#add-round').on('submit', onSubmitRound);
};

module.exports = {
  addHandlers
};
