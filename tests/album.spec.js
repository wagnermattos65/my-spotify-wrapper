// getAlbum
// getAlbumTracks

import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('My Spotify Wrapper', () => {
  describe('Album', () => {
    let FetchedStub;
    let promise;

    beforeEach(() => {
      FetchedStub = sinon.stub(global, 'fetch');
      promise = FetchedStub.returnsPromise();
    });

    afterEach(() => {
      FetchedStub.restore();
    });

    describe('Smoke Tests', () => {
      it('should have getAlbum method', () => {
        expect(getAlbum).to.exist;
      });
      it('should have getAlbums method', () => {
        expect(getAlbums).to.exist;
      });
      it('should have getAlbumTracks method', () => {
        expect(getAlbumTracks).to.exist;
      });
    });

    describe('getAlbum', () => {
      // verifica se o fetch ocorre
      it('should call fetch method', () => {
        const album = getAlbum();
        expect(FetchedStub).to.have.been.calledOnce;
      });

      // verifica se o fetch ocorre na URL desejada
      it('should call fetch with correct URL', () => {
        const album = getAlbum('dgsdfgdfgklnd');
        expect(FetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/{dgsdfgdfgklnd}');
      });

      // verifica se o dado é recebido pela Promise
      it.skip('should return the correct data from Promise', () => {
        promise.resolves({ album: 'name'});

        const album = getAlbum('dgsdfgdfgklnd');
        expect(album.resolveValue).to.be.eql({ album: 'name' });
      });
    });

    describe('getAlbums', () => {
      // verifica se o fetch ocorre
      it('should call fetch method', () => {
        const albums = getAlbums(['dgsdfgdfgklnd', 'kljkhsahljhl']);
        expect(FetchedStub).to.have.been.calledOnce;
      });

      // verifica se o fetch ocorre na URL desejada
      it('should call fetch with correct URL', () => {
        const albums = getAlbums(['dgsdfgdfgklnd', 'kljkhsahljhl']);
        expect(FetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=dgsdfgdfgklnd,kljkhsahljhl');
      });

      // verifica se o dado é recebido pela Promise
      it.skip('should return the correct data from Promise', () => {
        promise.resolves({ albums: 'name' });

        const albums = getAlbums(['dgsdfgdfgklnd', 'kljkhsahljhl']);
        expect(albums.resolveValue).to.be.eql({ album: 'name' });
      });
    });

    describe('getAlbumTracks', () => {
      // verifica se o fetch ocorre
      it('should call fetch method', () => {
        const albumsTracks = getAlbumTracks();
        expect(FetchedStub).to.have.been.calledOnce;
      });

      // verifica se o fetch ocorre na URL desejada
      it('should call fetch with correct URL', () => {
        const albumTracks = getAlbumTracks('dgsdfgdfgklnd');
        expect(FetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/dgsdfgdfgklnd/tracks');
      });

      // verifica se o dado é recebido pela Promise
      it.skip('should return the correct data from Promise', () => {
        promise.resolves({ tracks: 'name' });

        const albumTracks = getAlbumTracks('dgsdfgdfgklnd');
        expect(albums.resolveValue).to.be.eql({ tracks: 'name' });
      });
    });

  });
});
