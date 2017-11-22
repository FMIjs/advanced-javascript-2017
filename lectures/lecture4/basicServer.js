// Simple HTTP Server using the http module
const http = require('http');
const port = 3000;


// The request handlers here handle every single request no matter the method or url
const basicRequestHandler = (req, res) => {
  console.log("Got request!");
  res.write("Hello world!");
  res.end();
}

const smarterRequestHandler = {
  'POST': {
    '/test': (req, res) => {
      console.log("got test POST");
      res.write("test");
      res.end();
    }
  }, 
  'GET': {
    '/': (req, res) => {
      console.log("got / GET");
      res.write("Hello World");
      res.end();
    }
  }
}

const server = http.createServer((req, res) => smarterRequestHandler[req.method][req.url](req, res));

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server listening on ${port}!`);
});
