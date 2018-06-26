import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { search, searchArtists, searchAlbums, searchTracks, searchPlaylists } from '../src/search';

describe('My Spotify Wrapper', () => {
  describe('Search', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    describe('Smoke Tests', () => {
      // searchGeneric (couldbe more than 1 type)
      // searchArtist
      // searchAlbum
      // searchTrack
      // searchPlaylist

      it('should exist the search method', () => {
        expect(search).to.exist;
      });

      it('should exist the searchArtists method', () => {
        expect(searchArtists).to.exist;
      });

      it('should exist the searchAlbums method', () => {
        expect(searchAlbums).to.exist;
      });

      it('should exist the searchTracks method', () => {
        expect(searchTracks).to.exist;
      });

      it('should exist the searchPlaylists method', () => {
        expect(searchPlaylists).to.exist;
      });

    });

    describe('Generic Search', () => {
      it('should call fetch function', () => {
        const artists = search();
        expect(fetchedStub).to.have.been.calledOnce;
      });

      it('should receive the correct url to fetch', () => {
        context('Passing one type', () => {
          const artists = search('supercombo','artist');
          expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=supercombo&type=artist');

          const albums = search('supercombo','album');
          expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=supercombo&type=album');
        });

        context('Passing more than one type', () => {
          const artistsAndAlbuns = search('supercombo',['artist','album']);
          expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=supercombo&type=artist,album');
        });
      });

      it.skip('should return the JSON Data from the Promise', () => {
        promise.resolves({ body: 'json' });

        const artists = search('supercombo', 'artist');
        expect(artists.resolveValue).to.be.eql({ body: 'json' });
      });
    });

    describe('searchArtists', () => {
      it('should call fetch function', () => {
        const artists = searchArtists('supercombo');
        expect(fetchedStub).to.have.been.calledOnce;
      });
      it('should call fetch with the correct url', ()=> {
        const artists = searchArtists('supercombo');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=supercombo&type=artist');
      });
    });

    describe('searchAlbums', () => {
      it('should call fetch function', () => {
        const albums = searchAlbums('rogerio');
        expect(fetchedStub).to.have.been.calledOnce;
      });
      it('should call fetch with the correct url', ()=> {
        const albums = searchAlbums('rogerio');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=rogerio&type=album');
      });
    });

    describe('searchTracks', () => {
      it('should call fetch function', () => {
        const tracks = searchTracks('bonsai');
        expect(fetchedStub).to.have.been.calledOnce;
      });
      it('should call fetch with the correct url', ()=> {
        const tracks = searchTracks('bonsai');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=bonsai&type=track');
      });
    });

    describe('searchplaylists', () => {
      it('should call fetch function', () => {
        const playlists = searchPlaylists('supercombo_sessions_da_tarde');
        expect(fetchedStub).to.have.been.calledOnce;
      });
      it('should call fetch with the correct url', ()=> {
        const playlists = searchPlaylists('supercombo_sessions_da_tarde');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=supercombo_sessions_da_tarde&type=playlist');
      });
    });
  });

});
