import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

import MySpotifyWrapper from '../src/index';

describe('MySpotifyWrapper Library', function() {
  it('should create an instance of MySpotifyWrapper', () => {
    let mySpotify = new MySpotifyWrapper({});
    expect(mySpotify).to.be.an.instanceof(MySpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    let mySpotify = new MySpotifyWrapper({
      apiURL: 'https://api.spotify.com/v1',
    });
    expect(mySpotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should use the default apiURL if not provided', () => {
    let mySpotify = new MySpotifyWrapper({});
    expect(mySpotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    let mySpotify = new MySpotifyWrapper({
      token: 'spotify-token',
    });
    expect(mySpotify.token).to.be.equal('spotify-token');
  });

  describe('Request Method', () => {
    let FetchedStub;
    let promise;

    beforeEach(() => {
      FetchedStub = sinon.stub(global, 'fetch');
      promise = FetchedStub.returnsPromise();
    });

    afterEach(() => {
      FetchedStub.restore();
    });

    it('should have request method', () => {
      let mySpotify = new MySpotifyWrapper({});
      expect(mySpotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      let mySpotify = new MySpotifyWrapper({
        token: 'spotify-token',
      });
      mySpotify.request('url');
      expect(FetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with right url passed', () => {
      let mySpotify = new MySpotifyWrapper({
        token: 'spotify-token',
      });
      mySpotify.request('url');
      expect(FetchedStub).to.have.been.calledWith('url');
    });

    it('should call fetch with right header passed', () => {
      let mySpotify = new MySpotifyWrapper({
        token: 'spotify-token',
      });

      const headers = {
        headers: {
          Authorization: 'Bearer spotify-token',
        },
      };
      mySpotify.request('url');
      expect(FetchedStub).to.have.been.calledWith('url', headers);
    });
  });
});
