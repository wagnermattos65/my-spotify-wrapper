'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = require('../src/config');

var _utils = require('../src/utils');

var search = function search(query, type) {
  fetch(_config.API_URL + '/search?q=' + query + '&type=' + type).then(_utils.toJSON).catch(function (err) {
    return console.log('Error on response: ' + err);
  });
};
var searchArtists = function searchArtists(query) {
  search(query, 'artist');
};

var searchAlbums = function searchAlbums(query) {
  search(query, 'album');
};

var searchTracks = function searchTracks(query) {
  search(query, 'track');
};

var searchPlaylists = function searchPlaylists(query) {
  search(query, 'playlist');
};

exports.search = search;
exports.searchArtists = searchArtists;
exports.searchAlbums = searchAlbums;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;