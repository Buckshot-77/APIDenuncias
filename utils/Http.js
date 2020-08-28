const axios = require('axios');

class Http {
  async get(url) {
    return await axios.get(url);
  }
}

module.exports = Http;
