!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mySpotifyWrapper=t():e.mySpotifyWrapper=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.toJSON=function(e){return e.json()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="BQBtaerEoofX-0I3MHXs07qMD0CjlAgmV8wGUuiQQqYrb1YBupdsayVWbBHMF8XxPhm7WopqVmZVt3RgGjdggun18gqsr8PLLjjba6F5AL23pezFOUgAZX8SVv7a5RgZsHc__eiUcCCBkKM8pAIznPTXBl-o47E",u={headers:{Authorization:"Bearer "+r}};t.API_URL="https://api.spotify.com/v1",t.TOKEN_API=r,t.HEADERS=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=this;return{getAlbum:function(t){return e.request(e.apiURL+"/albums/"+t)},getAlbums:function(t){return e.request(e.apiURL+"/albums/?ids="+t)},getTracks:function(t){return e.request(e.apiURL+"/albums/"+t+"/tracks")}}}},function(e,t,n){"use strict";function r(e,t){return this.request(this.apiURL+"/search/?q="+t+"&type="+e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{artists:r.bind(this,"artist"),albums:r.bind(this,"album"),tracks:r.bind(this,"track"),playlists:r.bind(this,"playlist")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=s(n(3)),o=s(n(2)),i=n(1),a=n(0);function s(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiURL=t.apiURL||i.API_URL,this.token=t.token,this.search=u.default.bind(this)(),this.album=o.default.bind(this)()}return r(e,[{key:"request",value:function(e){var t={headers:{Authorization:"Bearer "+this.token}};return fetch(e,t).then(a.toJSON)}}]),e}();t.default=f},function(e,t,n){e.exports=n(4).default}])});
//# sourceMappingURL=my-spotify-wrapper.umd.js.map