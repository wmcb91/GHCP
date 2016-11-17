'use strict';
//PROFILE API

const app = require('../app');

const index = function() {
  return $.ajax({
    url: app.host + '/profiles',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const showProfile = function (id) {
  console.log('in show profile');
  return $.ajax({
    url: app.host + '/profiles/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

//CREATE PROFILE
const createProfile = function (data) {
  return $.ajax({
    url: app.host + '/profiles',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {profile: data}
  });
};

const updateProfile = function (data) {
  console.log('patch data is', data);
  return $.ajax({
    url: app.host + '/profiles/' + app.profile.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
            profile:{
              given_name: data.given_name,
              surname: data.surname,
              home_course: data.home_course,
              home_course_slope: data.home_course_slope
            }
          }
  });
};


const destroyProfile = function () {
  return $.ajax({
    url: app.host + '/profiles/' + app.profile.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};

module.exports = {
  index,
  showProfile,
  createProfile,
  updateProfile,
  destroyProfile,
};
