'use strict';

const app = require('../app');

const calculateDifferential = (round) => {
  let score = round.score;
  let slope = round.slope;
  let rating = round.rating;
  let differential = (score - rating) * 113 / slope;
  return differential;
};

const calcDifferentialsToUse = () => {
  let roundsPlayed = app.profile.rounds.length;
  let differentialsUsed;
  if (roundsPlayed < 5){
    differentialsUsed = 0;
    // Add error message
  }
  else if (roundsPlayed < 7){
    differentialsUsed = 1;
  }
  else if (roundsPlayed < 9){
    differentialsUsed = 2;
  }
  else if (roundsPlayed < 11){
    differentialsUsed = 3;
  }
  else if (roundsPlayed < 13){
    differentialsUsed = 4;
  }
  else if (roundsPlayed < 15){
    differentialsUsed = 5;
  }
  else if (roundsPlayed < 17){
    differentialsUsed = 6;
  }
  else if (roundsPlayed === 17){
    differentialsUsed = 7;
  }
  else if (roundsPlayed === 18){
    differentialsUsed = 8;
  }
  else if (roundsPlayed === 19){
    differentialsUsed = 9;
  }
  else {
    differentialsUsed = 10;
  }
  return differentialsUsed;
};


const createDifferentialArray = () => {
  let differentialArray = [];
  let max;
  if (app.profile.rounds.length < 20) {
    max = app.profile.rounds.length;
  } else {
    max = 20;
  }

  for (let i = 0; i < max; i++) {
    differentialArray.push(parseFloat(app.profile.rounds[i].differential));
  }
  return differentialArray;
};

const createLowestDifferentialArray = (array, differentialsUsed) => {
  let max = differentialsUsed;
  let differentialArray = array;
  let lowestDiffArray = [];
  for (let i = 0; i < max; i++) {
    let lowestDiff = Math.min.apply(null, differentialArray);
    let lowDiffIndex = differentialArray.indexOf(lowestDiff);
    lowestDiffArray.push(lowestDiff);
    differentialArray.splice(lowDiffIndex, 1);
  }
  return lowestDiffArray;
};



const averageDifferential = (array) => {
  let lowestDiffArray = array;
  let sum = lowestDiffArray.reduce(function(a, b) {
    return a + b;
  }, 0);
  let averageDifferential = (sum / lowestDiffArray.length);
  return averageDifferential;
};

const adjustedAverageDifferential = (avgDifferential) => {
  let avgDiff = avgDifferential;
  let adjustedAvg = avgDiff * 0.96;
  return adjustedAvg;
};

const truncateAverage = (avg) => {
  let average = avg;
  let truncatedAverage;
  if (average >= 0) {
    truncatedAverage = Math.floor(average * 10) / 10;
  } else {
    truncatedAverage = Math.ceil(average * 10) / 10;
  }
  return truncatedAverage;
};

const calculateHandicapIndex = () => {
  let differentialsUsed = calcDifferentialsToUse();
  let differentialArray = createDifferentialArray();
  let lowestDiffArray = createLowestDifferentialArray(differentialArray, differentialsUsed);
  let avgDifferential = averageDifferential(lowestDiffArray);
  let adjustedAvg = adjustedAverageDifferential(avgDifferential);
  let handicapIndex = truncateAverage(adjustedAvg);
  app.profile.handicapIndex = handicapIndex;
  // $('.handicap-index').html(app.profile.handicapIndex);
};

const calculateHomeHandicap = () => {
  let handicapIndex = app.profile.handicapIndex;
  let homeSlope = app.profile.home_course_slope;
  let homeCourseHandicap = Math.round(handicapIndex * (homeSlope / 113));
  app.profile.homeCourseHandicap = homeCourseHandicap;
};

const calculateLowestScore = () => {
  let scoresArray = [];
  let max = app.profile.rounds.length;
  for (let i = 0; i < max; i++) {
    scoresArray.push(parseFloat(app.profile.rounds[i].score));
  }
  let lowestScore = Math.min.apply(null, scoresArray);
  app.profile.lowScore = lowestScore;
};

const updateProfileStats = () => {
  calculateHandicapIndex();
  calculateLowestScore();
  calculateHomeHandicap();
  $('.rounds-played').html(app.profile.rounds.length);
  $('.handicap-index').html(app.profile.handicapIndex);
  $('.home-handicap').html(app.profile.homeCourseHandicap);
  $('.lowest-round').html(app.profile.lowScore);

};




module.exports = {
  calculateDifferential,
  calculateHandicapIndex,
  updateProfileStats,
};
