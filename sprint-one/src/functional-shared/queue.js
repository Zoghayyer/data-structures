// var queueMethods = {
//   enqueue: function(value) {
//     this.storage[this.tail] = value;
//     this.top++;
//     this.tail++;
//   },
//   dequeue: function() {
//     if ( this.top > 0 ) {
//       var data = this.storage[this.head];
//        delete this.storage[this.head];
//        this.head++;
//        this.top--;
//        return data;
//     }
//   },
//   size: function() {
//     return this.top;
//   } 
// };

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    var oldKey = Object.keys(this.storage)[0];
    var result = this.storage[oldKey];
    delete this.storage[oldKey];
    return result;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


