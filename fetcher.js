const request = require('request');
const fs = require('fs');
const data = process.argv.slice(2);
const urlToFetch = data[0];
const filePath = data[1];


request(urlToFetch, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    fs.writeFile(filePath, body, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Downloaded ${body.length} bytes and saved to ${filePath}`);
      }
    });
  }
});
