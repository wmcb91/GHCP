'use strict';

const app = require('../app');

const indexRounds = function() {
  return $.ajax({
    url: app.host + '/rounds',
    method: 'GET',
  });
};

const createRound = function (data) {
  return $.ajax({
    url: app.host + '/rounds',
    method: 'POST',
    data: data,
  });
};

module.exports = {
  createRound,
  indexRounds
};
