const ENV = process.env;

const config = {
  api: {
    baseURL: ENV.REACT_APP_BASE_URL,
    tokenKEY: ENV.REACT_APP_TOKEN_KEY,
  },
};

export default config;
