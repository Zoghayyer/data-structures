var Queue = function () {
  var someInstance = {};
  var storage = {};
  var count = 0;
  someInstance.enqueue = function (value) {
    storage[count] = value;
    count++;
  };
  someInstance.dequeue = function() {
    var oldKey = Object.keys(storage)[0];
    var result = storage[oldKey];
    delete storage[oldKey];
    return result;
  };
  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  return someInstance;
};
