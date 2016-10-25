'use strict';

// const app = require('../app');

const calculateDifferential = (round) => {
  let score = round.score;
  let slope = round.slope;
  let rating = round.rating;
  let differential = (score - rating) * 113 / slope;
  console.log(differential);
  return differential;
};

module.exports = {
  calculateDifferential,
};
