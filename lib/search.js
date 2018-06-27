'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = require('../src/config');

var _utils = require('../src/utils');

/* global fetch */

var search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, _config.HEADERS).then(_utils.toJSON);
};

var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

exports.search = search;
exports.searchArtists = searchArtists;
exports.searchAlbums = searchAlbums;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;