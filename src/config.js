const API_URL = 'https://api.spotify.com/v1';

const TOKEN_API = 'BQBtaerEoofX-0I3MHXs07qMD0CjlAgmV8wGUuiQQqYrb1YBupdsayVWbBHMF8XxPhm7WopqVmZVt3RgGjdggun18gqsr8PLLjjba6F5AL23pezFOUgAZX8SVv7a5RgZsHc__eiUcCCBkKM8pAIznPTXBl-o47E';

const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN_API}`,
  },
};

export { API_URL, TOKEN_API, HEADERS };
