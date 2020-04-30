class EventEmitter {
  constructor() {
    this.eventContainer = {};
  }

  on(event, func) {
    if (this.eventContainer[event]) {
      this.eventContainer[event].push({ func });
    } else {
      this.eventContainer[event] = [{ func }];
    }
  }

  emit(event, msg) {
    if (!this.eventContainer[event]) {
      return new Error(`No event found: ${event}`);
    }

    this.eventContainer[event].forEach(f => {
      f.func(msg);
    });

    this.eventContainer[event] = this.eventContainer[event].filter(f => !f.once);
  }

  once(event, func) {
    if (this.eventContainer[event]) {
      this.eventContainer[event].push({ func, once: true });
    } else {
      this.eventContainer[event] = [{ func, once: true }];
    }
  }

  off(event, func) {
    this.eventContainer[event] = this.eventContainer[event].filter(f => f.func.name !== func.name);
  }
}
var eventEmitter = new EventEmitter();

function responseToEvent(msg) {
  console.log(msg);
}

eventEmitter.on('pramp', responseToEvent);
eventEmitter.once('pramp', function(msg) {
  console.log(msg + ' just once!');
});
eventEmitter.emit('pramp', '1st');
eventEmitter.emit('pramp', '2nd');
eventEmitter.off('pramp', responseToEvent);
eventEmitter.emit('pramp', '3rd');
eventEmitter.emit('pramp', '1st');
