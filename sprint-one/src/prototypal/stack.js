var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.counter = 0;

  return newStack;
};

var stackMethods = {
  size: function() { 
    return Object.keys(this.storage).length;
  },
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop: function() {
    this.counter--;
    var value = this.storage[this.counter];
    delete this.storage[this.counter];
    return value;
  }
};


