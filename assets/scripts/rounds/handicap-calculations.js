'use strict';

const app = require('../app');

const calculateDifferential = (round) => {
  let score = round.score;
  let slope = round.slope;
  let rating = round.rating;
  let differential = (score - rating) * 113 / slope;
  console.log(differential);
  return differential;
};

const calcDifferentialsToUse = () => {
  let roundsPlayed = app.profile.rounds.length;
  let differentialsUsed;
  console.log('1. number of rounds played is', roundsPlayed);
  if (roundsPlayed < 5){
    differentialsUsed = 0;
    // Add error message
    // return;
  }
  else if (roundsPlayed < 7){
    differentialsUsed = 1;
    // return;
  }
  else if (roundsPlayed < 9){
    differentialsUsed = 2;
    // return;
  }
  else if (roundsPlayed < 11){
    differentialsUsed = 3;
    // return;
  }
  else if (roundsPlayed < 13){
    differentialsUsed = 4;
    // return;
  }
  else if (roundsPlayed < 15){
    differentialsUsed = 5;
    // return;
  }
  else if (roundsPlayed < 17){
    differentialsUsed = 6;
    // return;
  }
  else if (roundsPlayed === 17){
    differentialsUsed = 7;
    // return;
  }
  else if (roundsPlayed === 18){
    differentialsUsed = 8;
    // return;
  }
  else if (roundsPlayed === 19){
    differentialsUsed = 9;
    // return;
  }
  else {
    differentialsUsed = 10;
    // return;
  }
  console.log('1b. # of differentials to be used is', differentialsUsed);
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
  console.log('2. differentialArray is', differentialArray);
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
    console.log('3. lowest diff is', lowestDiff);
    console.log('3. index of lowest diff is', lowDiffIndex);
    differentialArray.splice(lowDiffIndex, 1);
  }
  console.log('3b. lowest diffs are', lowestDiffArray);
  return lowestDiffArray;
};



const averageDifferential = (array) => {
  let lowestDiffArray = array;
  let sum = lowestDiffArray.reduce(function(a, b) {
    return a + b;
  }, 0);
  let averageDifferential = (sum / lowestDiffArray.length);
  console.log('4. averageDifferential is', averageDifferential);
  return averageDifferential;
};

const adjustedAverageDifferential = (avgDifferential) => {
  let avgDiff = avgDifferential;
  let adjustedAvg = avgDiff * 0.96;
  console.log('5. adjustedAvg is', adjustedAvg);
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

// const calcHomeHandicap = (index) => {
//   let handicapIndex = index;
//   let homeSlope = app.profile.homeSlope;
//   let homeCourseHandicap = handicapIndex * (homeSlope / 113);
//   return homeCourseHandicap;
// };

const calculateHandicapIndex = () => {
  let differentialsUsed = calcDifferentialsToUse();
  let differentialArray = createDifferentialArray();
  let lowestDiffArray = createLowestDifferentialArray(differentialArray, differentialsUsed);
  let avgDifferential = averageDifferential(lowestDiffArray);
  let adjustedAvg = adjustedAverageDifferential(avgDifferential);
  let handicapIndex = truncateAverage(adjustedAvg);
  app.profile.handicapIndex = handicapIndex;
  $('.handicap-index').html(app.profile.handicapIndex);
};

const calculateLowestScore = () => {
  let scoresArray = [];
  let max = app.profile.rounds.length;
  for (let i = 0; i < max; i++) {
    scoresArray.push(parseFloat(app.profile.rounds[i].score));
  }
  return scoresArray;
};

const updateProfileStats = () => {
  let scores =
};




module.exports = {
  calculateDifferential,
  // calcDifferentialsToUse,
  // createDifferentialArray,
  // createLowestDifferentialArray,
  // averageDifferential,
  // adjustedAverageDifferential,
  calculateHandicapIndex,
  updateProfileStats,
};
