const request = require('request');

const breed = process.argv[2].slice(0, 4);

request.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`, function(error, response, body) {
  if (error) {
    console.log('Request Failed');
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed Not Found');
    return;
  }
  console.log(data[0].breeds);
});