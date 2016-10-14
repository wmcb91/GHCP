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

//PRESS SUBMIT BUTTON AFTER ENTERING ROUND DATA
const onSubmitRound = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.profile_id = app.profile.id;
  api.createRound(data)
    .done(ui.createRoundSuccess)
    .fail(ui.createRoundFailure);
};

// const onDeleteLastRound = function () {
//   let roundID;
//   if (app.profile.rounds[0] === undefined) {
//     return;
//   }
//   else if (app.profile.rounds.length === 1) {
//     roundID = app.profile.rounds[0].id;
//   } else {
//     roundID = app.profile.rounds.pop().id;
//   }
//   api.destroyRound(roundID)
//     .done(ui.deleteRoundSuccess);
//   ui.deleteLastRoundSuccess();
// };

const addHandlers = function() {
  $('.add').on('click', onAddRoundClick);
  $('.cancel').on('click', onCancelAddRoundClick);
  $('#add-round').on('submit', onSubmitRound);
  // $('#delete-last-round').on('click', onDeleteLastRound);
};

module.exports = {
  addHandlers
};
