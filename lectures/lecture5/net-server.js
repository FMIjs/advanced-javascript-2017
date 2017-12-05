const net = require('net');
const server = net.createServer(c => {
  console.log('server connected');
  c.on('end', function () {
    console.log('server disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});

server.listen(3001, () => {
  console.log('server bound');
});

import { Injector, Injectable } from 'angular2/angular2';

@Injectable()
class Engine {
}

@Injectable()
class Car {
  constructor(public engine: Engine) { }
}

var injector = Injector.resolveAndCreate([Car, Engine]);
var car = injector.get(Car);

expect(car instanceof Car).toBe(true);
expect(car.engine instanceof Engine).toBe(true);