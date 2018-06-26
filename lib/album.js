'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('../src/config');

var _utils = require('../src/utils');

var getAlbum = function getAlbum(id) {
  fetch(_config.API_URL + '/albums/{' + id + '}').then(_utils.toJSON);
};
var getAlbums = function getAlbums(ids) {
  fetch(_config.API_URL + '/albums/?ids=' + ids).then(_utils.toJSON);
};

var getAlbumTracks = function getAlbumTracks(id) {
  fetch(_config.API_URL + '/albums/' + id + '/tracks').then(_utils.toJSON);
};

exports.getAlbum = getAlbum;
exports.getAlbums = getAlbums;
exports.getAlbumTracks = getAlbumTracks;