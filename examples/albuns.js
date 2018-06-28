global.fetch = require('node-fetch');

import MySpotifyWrapper from '../src/index';

const mySpotify = new MySpotifyWrapper({
  token: 'BQC620r0hGcvhM86FTWsR8EkX_y2kvKC7m5mH7NZyQGm3-4TMYHeol_0hrSD_8TfHfR9vNkJl7orGfhMVSu7s7buPlr7ODmKC-Z_rwe819O-CdygTUIFa-2_-La2xKkM8p-B3CmhcRjniguuDAj1ZFwcOpP54WA',
});

// to run test execute command ../node_modules/.bin/babel-node albuns.js
const albums = mySpotify.search.albums('supercombo');
albums.then(data => data.albums.items.map(item => console.log(item.name)));
