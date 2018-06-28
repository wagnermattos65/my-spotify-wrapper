import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import MySpotifyWrapper from '../src/index';

describe('My Spotify Wrapper', () => {
  describe('Search', () => {
    let mySpotify;
    let fetchedStub;
    let promise;

    beforeEach(() => {
      mySpotify = new MySpotifyWrapper({
        token: 'spotify-token',
      });
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    describe('Smoke Tests', () => {
      it('should exist the artists method', () => {
        expect(mySpotify.search.artists).to.exist;
      });

      it('should exist the albums method', () => {
        expect(mySpotify.search.albums).to.exist;
      });

      it('should exist the tracks method', () => {
        expect(mySpotify.search.tracks).to.exist;
      });

      it('should exist the playlists method', () => {
        expect(mySpotify.search.playlists).to.exist;
      });

    });

    describe('artists', () => {
      it('should call fetch function', () => {
        const artists = mySpotify.search.artists('supercombo');
        expect(fetchedStub).to.have.been.calledOnce;
      });
      it('should call fetch with the correct url', () => {
        const artists = mySpotify.search.artists('supercombo');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search/?q=supercombo&type=artist');
      });
    });

    describe('searchAlbums', () => {
      it('should call fetch function', () => {
        const albums = mySpotify.search.albums('rogerio');
        expect(fetchedStub).to.have.been.calledOnce;
      });
      it('should call fetch with the correct url', () => {
        const albums = mySpotify.search.albums('rogerio');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search/?q=rogerio&type=album');
      });
    });

    describe('searchTracks', () => {
      it('should call fetch function', () => {
        const tracks = mySpotify.search.tracks('bonsai');
        expect(fetchedStub).to.have.been.calledOnce;
      });
      it('should call fetch with the correct url', () => {
        const tracks = mySpotify.search.tracks('bonsai');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search/?q=bonsai&type=track');
      });
    });

    describe('searchplaylists', () => {
      it('should call fetch function', () => {
        const playlists = mySpotify.search.playlists('supercombo_sessions_da_tarde');
        expect(fetchedStub).to.have.been.calledOnce;
      });
      it('should call fetch with the correct url', () => {
        const playlists = mySpotify.search.playlists('supercombo_sessions_da_tarde');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search/?q=supercombo_sessions_da_tarde&type=playlist');
      });
    });
  });

});
