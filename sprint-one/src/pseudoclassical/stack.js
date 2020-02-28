var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  this.count--;
  var value = this.storage[this.count];
  delete this.storage[this.count];
  return value;
};

Stack.prototype.size = function() { 
  return Object.keys(this.storage).length;
};
