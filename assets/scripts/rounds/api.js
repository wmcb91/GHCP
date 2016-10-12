'use strict';

const app = require('../app');

const indexRounds = function() {
  return $.ajax({
    url: app.host + '/rounds',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const createRound = function (data) {
  return $.ajax({
    url: app.host + '/rounds',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {round: data}
  });
};

const destroyRound = function (id) {
  // below seems unnecessary
  // let roundID = id;
  return $.ajax({
    url: app.host + '/rounds/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  createRound,
  indexRounds,
  destroyRound
};
