const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedName}`, function(error, response, body) {
    if (error || JSON.parse(body).length < 1) {
      callback(error = "wrong specie", null);
    } else if (!error) {
      const data = JSON.parse(body)[0].breeds[0].description;
      callback(null, data);
    }
  });
};

module.exports = { fetchBreedDescription };