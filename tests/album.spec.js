// getAlbum
// getAlbumTracks

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

import MySpotifyWrapper from '../src/index';

describe('My Spotify Wrapper', () => {
  describe('Album', () => {
    let mySpotify;
    let FetchedStub;
    let promise;

    beforeEach(() => {
      mySpotify = new MySpotifyWrapper({
        token: 'spotify-token',
      });
            FetchedStub = sinon.stub(global, 'fetch');
      promise = FetchedStub.returnsPromise();
    });

    afterEach(() => {
      FetchedStub.restore();
    });

    describe('Smoke Tests', () => {
      it('should have getAlbum method', () => {
        expect(mySpotify.album.getAlbum).to.exist;
      });
      it('should have getAlbums method', () => {
        expect(mySpotify.album.getAlbums).to.exist;
      });
      it('should have getAlbumTracks method', () => {
        expect(mySpotify.album.getTracks).to.exist;
      });
    });

    describe('getAlbum', () => {
      // verifica se o fetch ocorre
      it('should call fetch method', () => {
        const album = mySpotify.album.getAlbum();
        expect(FetchedStub).to.have.been.calledOnce;
      });

      // verifica se o fetch ocorre na URL desejada
      it('should call fetch with correct URL', () => {
        const album = mySpotify.album.getAlbum('dgsdfgdfgklnd');
        expect(FetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/dgsdfgdfgklnd');
      });

      // verifica se o dado é recebido pela Promise
      it('should return the correct data from Promise', () => {
        promise.resolves({ album: 'name' });

        const album = mySpotify.album.getAlbum('dgsdfgdfgklnd');
        expect(album.resolveValue).to.be.eql({ album: 'name' });
      });
    });

    describe('getAlbums', () => {
      // verifica se o fetch ocorre
      it('should call fetch method', () => {
        const albums = mySpotify.album.getAlbums(['dgsdfgdfgklnd', 'kljkhsahljhl']);
        expect(FetchedStub).to.have.been.calledOnce;
      });

      // verifica se o fetch ocorre na URL desejada
      it('should call fetch with correct URL', () => {
        const albums = mySpotify.album.getAlbums(['dgsdfgdfgklnd', 'kljkhsahljhl']);
        expect(FetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=dgsdfgdfgklnd,kljkhsahljhl');
      });

      // verifica se o dado é recebido pela Promise
      it('should return the correct data from Promise', () => {
        promise.resolves({ albums: 'name' });

        const albums = mySpotify.album.getAlbums(['dgsdfgdfgklnd', 'kljkhsahljhl']);
        expect(albums.resolveValue).to.be.eql({ albums: 'name' });
      });
    });

    describe('getAlbumTracks', () => {
      // verifica se o fetch ocorre
      it('should call fetch method', () => {
        const albumsTracks = mySpotify.album.getTracks();
        expect(FetchedStub).to.have.been.calledOnce;
      });

      // verifica se o fetch ocorre na URL desejada
      it('should call fetch with correct URL', () => {
        const albumTracks = mySpotify.album.getTracks('dgsdfgdfgklnd');
        expect(FetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/dgsdfgdfgklnd/tracks');
      });

      // verifica se o dado é recebido pela Promise
      it('should return the correct data from Promise', () => {
        promise.resolves({ tracks: 'name' });

        const albumTracks = mySpotify.album.getTracks('dgsdfgdfgklnd');
        expect(albumTracks.resolveValue).to.be.eql({ tracks: 'name' });
      });
    });
  });
});
