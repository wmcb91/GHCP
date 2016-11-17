'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const profileAPI = require('../profile/api');
const ui = require('./ui');
const handicap = require('./handicap-calculations');
const app = require('../app');

const onAddRoundClick = function () {
  ui.showAddRoundField();
};

const onCancelAddRoundClick = function () {
  ui.hideAddRoundField();
};


const getProfileRounds = () => {
  profileAPI.showProfile(app.profile.id)
    .done(ui.createRoundSuccess, handicap.calculateHandicap)
    .fail(ui.createRoundFailure);
};

//PRESS SUBMIT BUTTON AFTER ENTERING ROUND DATA
const onSubmitRound = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.differential = handicap.calculateDifferential(data);
  data.profile_id = app.profile.id;
  api.createRound(data)
    .done(getProfileRounds)
    .fail(ui.createRoundFailure);

  // api.createRound(data)
  //   .done(ui.createRoundSuccess)
  //   .fail(ui.createRoundFailure);
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
