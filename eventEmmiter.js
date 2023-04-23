class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    on(eventName, callback) {
      !this.events[eventName] && (this.events[eventName] = []);
      this.events[eventName].push(callback);
    }
  
    off(eventName, callback) {
      this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
    }
  
    once(eventName, callback) {
      this.events[eventName] = this.events[eventName] || [];
      const onceEvent = (args) => {
        callback.call(onceEvent, args);
        this.off(eventName, onceEvent);
      };
      this.events[eventName].push(onceEvent);
      return this;
    }
  
    emit(eventName, ...args) {
      const event = this.events[eventName];
      event && event.forEach(callback => callback.call(null, ...args));
    }
  }
  
  class BroadcastEventEmitter extends EventEmitter {
    emit(event, ...args) {
      if (event !== '*') return void(super.emit(event, args));
      Object.keys(this.events).forEach((e) => super.emit(e, ...args));
    }
  }