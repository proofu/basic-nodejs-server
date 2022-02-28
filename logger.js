// jshint esversion:6

const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // call event
        this.emit('message', { id: uuidv4(), msg });
    }
}

// module.exports = Logger;