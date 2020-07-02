const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  const data = JSON.parse(body);
  // const data = body;
  console.log(data);
  console.log(typeof data);
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  if (response && response.statusCode >= 400) {
    console.log(data.message);
  } else if (data.length === 0) {
    console.log("The breed you have searched does not exist.");
  } else if (data.length !== 0) {
    console.log(data[0].description);
  }
});