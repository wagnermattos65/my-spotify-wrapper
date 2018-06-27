'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = 'https://api.spotify.com/v1';

var TOKEN_API = 'BQB0cMTRU4MZG5X7IksO7JwWcGiUhMISL1bg93CorCYQg1rVRwejaIt4Hn6-3NN6N58JQXbZOzuGkECw76XYRRc29uCA-yC0fF96aq1HCMXyQbg3y00hD2_huLVg2eFNLmiuJKkSHeezOP9Qdb9iLwbwGi9G1Qw';

var HEADERS = {
  headers: {
    Authorization: 'Bearer ' + TOKEN_API
  }
};

exports.API_URL = API_URL;
exports.TOKEN_API = TOKEN_API;
exports.HEADERS = HEADERS;