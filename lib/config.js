'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = 'https://api.spotify.com/v1';

var TOKEN_API = 'BQBtaerEoofX-0I3MHXs07qMD0CjlAgmV8wGUuiQQqYrb1YBupdsayVWbBHMF8XxPhm7WopqVmZVt3RgGjdggun18gqsr8PLLjjba6F5AL23pezFOUgAZX8SVv7a5RgZsHc__eiUcCCBkKM8pAIznPTXBl-o47E';

var HEADERS = {
  headers: {
    Authorization: 'Bearer ' + TOKEN_API
  }
};

exports.API_URL = API_URL;
exports.TOKEN_API = TOKEN_API;
exports.HEADERS = HEADERS;