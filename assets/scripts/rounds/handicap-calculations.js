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


const calcDifferentialsToUse = (data) => {
  let roundsPlayed = data.profile.rounds.length;
  let differentialsUsed;
  console.log('number of rounds played is', roundsPlayed);
  if (roundsPlayed < 5){
    differentialsUsed = 0;
    return;
  }
  else if (roundsPlayed < 7){
    differentialsUsed = 1;
    return;
  }
  else if (roundsPlayed < 9){
    differentialsUsed = 2;
    return;
  }
  else if (roundsPlayed < 11){
    differentialsUsed = 3;
    return;
  }
  else if (roundsPlayed < 13){
    differentialsUsed = 4;
    return;
  }
  else if (roundsPlayed < 15){
    console.log('less than 15');
    differentialsUsed = 5;
    return;
  }
  else if (roundsPlayed < 17){
    console.log('less than 17');
    differentialsUsed = 6;
    return;
  }
  else if (roundsPlayed === 17){
    differentialsUsed = 7;
    return;
  }
  else if (roundsPlayed === 18){
    differentialsUsed = 8;
    return;
  }
  else if (roundsPlayed === 19){
    differentialsUsed = 9;
    return;
  }
  else {
    differentialsUsed = 10;
    return;
  }
  return differentialsUsed;
};



// let applicableRounds
//   @rounds = @profile.rounds.order_by(:date_played).limit(20)
// end






module.exports = {
  calculateDifferential,
};
