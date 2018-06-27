const API_URL = 'https://api.spotify.com/v1';

const TOKEN_API = 'BQB0cMTRU4MZG5X7IksO7JwWcGiUhMISL1bg93CorCYQg1rVRwejaIt4Hn6-3NN6N58JQXbZOzuGkECw76XYRRc29uCA-yC0fF96aq1HCMXyQbg3y00hD2_huLVg2eFNLmiuJKkSHeezOP9Qdb9iLwbwGi9G1Qw';

const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN_API}`,
  },
};

export { API_URL, TOKEN_API, HEADERS };
