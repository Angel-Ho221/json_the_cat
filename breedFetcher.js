const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
    } else if (response && response.statusCode >= 400) {
      let errMsg = data.message;
      callback(errMsg, null);
    } else if (data.length === 0) {
      let errMsg = "The breed you have searched does not exist.";
      callback(errMsg, null);
    } else if (data.length !== 0) {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
