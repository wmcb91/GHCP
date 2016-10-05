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
