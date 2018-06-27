/* global fetch */

import { API_URL, HEADERS } from '../src/config';
import { toJSON } from '../src/utils';

const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS).then(toJSON);

const searchArtists = query => search(query, 'artist');

const searchAlbums = query => search(query, 'album');

const searchTracks = query => search(query, 'track');

const searchPlaylists = query => search(query, 'playlist');

export { search, searchArtists, searchAlbums, searchTracks, searchPlaylists };

