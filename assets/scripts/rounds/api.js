'use strict';

const app = require('../app');

const createRound = function (data) {
  return $.ajax({
    url: app.host + '/rounds',
    method: 'POST',
    data: data,
  });
};

module.exports = {
  createRound,
};
