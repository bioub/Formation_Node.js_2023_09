const EventEmitter = require('node:events');

const events = new EventEmitter();

events.on('data', (data) => {
  console.log('on', data);
})

events.once('data', (data) => {
  console.log('once', data);
})

events.emit('data', 'Hello');
events.emit('data', 'Hello');
events.emit('data', 'Hello');
console.log('FIN');
