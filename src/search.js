import { API_URL } from '../src/config';
import { toJSON } from '../src/utils';

const search = (query, type) => {
  fetch(`${API_URL}/search?q=${query}&type=${type}`)
    .then(toJSON)
    .catch(err => console.log(`Error on response: ${err}`));
};
const searchArtists = (query) => {
  search(query, 'artist');
};

const searchAlbums = (query) => {
  search(query, 'album');
};

const searchTracks = (query) => {
  search(query, 'track');
};

const searchPlaylists = (query) => {
  search(query, 'playlist');
};

export { search, searchArtists, searchAlbums, searchTracks, searchPlaylists };

