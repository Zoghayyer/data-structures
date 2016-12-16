
var Queue = function(storage, counter) {
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++; 
};

Queue.prototype.dequeue = function() {
  var oldestKey = Object.keys(this.storage)[0];
  var oldestValue = this.storage[oldestKey];
  delete this.storage[oldestKey];
  return oldestValue;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};