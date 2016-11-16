// GET DEEPER INFO ABOUT USER --> Do not need after serializer change.
// setTimeout(function () {
//   api.getUser(data)
//     .done(ui.getUserSuccess)
//     .fail(ui.signInFailure);
//   }, 120);

// const getUserSuccess = function (data) {
//   //SET USER INFO FROM GET
//   app.user = data.user;
//
//
//   if (app.user.profiles.length === 0) {
//     setTimeout(function(){$('#chooseProfileModal').modal('show');}, 200);
//   }
//   if (app.user.profiles.length === 1) {
//     app.profile = app.user.profiles[0];
//     $('#user-welcome').fadeIn(100);
//     $('#user-name-welcome').html(app.profile.given_name);
//     setTimeout(function(){$('.dashboard').fadeIn(100);}, 50);
//   }
//   else {
//     setTimeout(function(){$('#chooseProfileModal').modal('show');}, 350);
//   }
// };


// alternate
// $("<tr></tr>").appendTo('#add-round')
//   .append("<td>"+roundsObject[i].date_played+
//           "</td><td>"+roundsObject[i].course+
//           "</td><td>"+roundsObject[i].rating+
//           "</td><td>"+roundsObject[i].slope+
//           "</td><td>"+roundsObject[i].par+
//           "</td><td>"+roundsObject[i].score+
//           "</td>");


// let max = app.profile.rounds.length - 1;
// let min = app.profile.rounds.length - 15;
// for (let i = 0; i < app.profile.rounds.length; i++) {
// let max = app.profile.rounds.length;


// const addMaxRound = function (data) {
//   let newRoundObject = data;
//   $('.previous-rounds')
//     .prepend("<tr class='profile-rounds'><td>"+newRoundObject.date_played+
//             "</td><td>"+newRoundObject.course+
//             "</td><td>"+newRoundObject.rating+
//             "</td><td>"+newRoundObject.slope+
//             "</td><td>"+newRoundObject.par+
//             "</td><td>"+newRoundObject.score+
//             "</td></tr>");
//   $('.profile-rounds').last().remove();
// };

// ON SUBMISSION OF VALID ROUND
// const createMaxRoundSuccess = function (data) {
//   app.round = data.round;
//   app.profile.rounds[app.profile.rounds.length] = data.round;
//   hideAddRoundField();
//   setTimeout(function(){addMaxRound(app.round);}, 250);
// };

// const addRound = function (data) {
//   let newRoundObject = data;
//   $("<tr class='profile-rounds'><td>"+newRoundObject.date_played+
//             "</td><td>"+newRoundObject.course+
//             "</td><td>"+newRoundObject.rating+
//             "</td><td>"+newRoundObject.slope+
//             "</td><td>"+newRoundObject.par+
//             "</td><td>"+newRoundObject.score+
//             "</td></tr>").prependTo('.rounds-row');
// };
