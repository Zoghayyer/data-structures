var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.counter = 0;
  
  return newQueue;
};

var queueMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++; 
  },
  dequeue: function() {
    var oldestKey = Object.keys(this.storage)[0];
    var oldestValue = this.storage[oldestKey];
    delete this.storage[oldestKey];
    return oldestValue;
  }
};


