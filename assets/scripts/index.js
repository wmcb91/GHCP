'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const authEvents = require('./auth/events');
const profileEvents = require('./profile/events');
// const roundsEvents = require('./rounds/events');

$(() => {
  authEvents.addHandlers();
  profileEvents.addHandlers();
  // roundsEvents.addHandlers();

  // $('#sign-out').hide();
  $('#user-welcome').hide();
  $('#sign-in-failure').hide();
  // $('.dashboard').hide();
});
