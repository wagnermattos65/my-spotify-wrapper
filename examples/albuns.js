import { searchAlbums } from '../src/search';

const albums = searchAlbums('supercombo');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
