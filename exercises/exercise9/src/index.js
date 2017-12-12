
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'))

let cnum = 0;

app.get('/app.js',  (req, res) => {
  res.sendfile(__dirname + '/app.js');
});

function emitData(socket) {
  let data = Math.random()*100;
  socket.emit('DATA', data);
  console.log(`emitted [${data}] to client [${cnum}]`);
}

io.on('connection', function (socket) {
  cnum++;
  socket.emit('SERVICE', { status: 'connected' });
  console.warn(`client ${cnum} connected. start emitting data.`)
  setInterval(emitData.bind(this, socket, cnum), 1000);
});

console.log("starting server on port 31337")
server.listen(31337);
  