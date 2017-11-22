const express = require('express');
const bodyParser = require('body-parser');
const https = require('https')
const app = express();

const port = 3000;

// The body-parser is a middleware which parses incoming request bodies
// https://www.npmjs.com/package/body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/load', function(req, res) {
  https.get('https://www.fmi.uni-sofia.bg/en/', (innerRes) => {
    innerRes.on('data', (chunk) => {
      res.send(chunk.toString());
      res.end();
    });
  })
})

app.post(
  '/readUrl',
  mid, mid, // You list the middlewares you want to use here, you can add as many as you want
  function(req, res) {
    // --->
    const url = req.body.url;
    https.get(url, (innerRes) => {
      let data = '';
      innerRes.on('data', (chunk) => {
        data += chunk.toString();
      })
      innerRes.on('end', () => {
        res.send(data).end();
      })
    })
  })


// A custom middleware:
// Detailed explanation of what a middleware is: http://expressjs.com/en/guide/using-middleware.html
function mid(req, res, next) {
  console.log('in mid');
  if (!req.body.token) {
    res.send(401).end();
  }
  next(); // --->
  // next continues either to the next middleware or to the actual request handling (app.post(...))
}

app.listen(port, function() {
    console.log(`Server listening on ${port}`);
});
