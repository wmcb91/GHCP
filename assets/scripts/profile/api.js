'use strict';
//PROFILE API

const app = require('../app');

const index = function() {
  return $.ajax({
    url: app.host + '/profiles',
    method: 'GET',
  });
};

const getProfile = function (id) {
  app.profile.id = id;
  return $.ajax({
    url: app.host + '/profiles/' + app.profile.id,
    method: 'GET',
  });
};

//CREATE PROFILE
const createProfile = function (data) {
  return $.ajax({
    url: app.host + '/profiles',
    method: 'POST',
    data: data,
  });
};

const editProfile = function (data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const destroyProfile = function () {
  return $.ajax({
    url: app.host + '/profiles/' + app.profile.id,
    method: 'DELETE',
  });
};

module.exports = {
  index,
  getProfile,
  createProfile,
  editProfile,
  destroyProfile,
};
