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
