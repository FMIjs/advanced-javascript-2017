
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'))

let cnum = 0;

// serve app.js statically
// normally app.js should be in the 
// public dir - minified and webpacked
app.get('/app.js',  (req, res) => {
  res.sendfile(__dirname + '/app.js');
});

// this effectively emits via the channel
function emitData(socket) {
  let data = Math.random()*100;
  socket.emit('DATA', data);
  console.log(`emitted [${data}] to client [${cnum}]`);
}

// on connection...
// it is worth nothign that there's also
// somethign called socket.io-stream
io.on('connection', function (socket) {
  cnum++;
  socket.emit('SERVICE', { status: 'connected' });
  console.warn(`client ${cnum} connected. start emitting data.`)
  setInterval(emitData.bind(this, socket, cnum), 1000);
});

console.log("starting server on port 31337")
server.listen(31337);
  