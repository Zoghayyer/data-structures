// var Queue = function() {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below
//   var head = 0; 
//   var tail = 0;
//   var size=0; //{1:'a', 2:'b'}

//   someInstance.enqueue = function(value) {
//    storage[tail] = value;
//    size++;
//    tail++;
   
//   };

//   someInstance.dequeue = function() {
//     if(size > 0) {
//       var data=storage[head];
//        delete storage[head];
//        head++;
//        size--;
//        return data;
//     }
//   };

//   someInstance.size = function() {
//     return size;
//   };

//   return someInstance;
// };

var Queue = function () {
  var someInstance = {};
  var storage = {};
  var count = 0;
  someInstance.enqueue = function (value) {
     storage[count] = value;
     count++;
  }
  someInstance.dequeue = function() {
     var oldKey = Object.keys(storage)[0];
     var result = storage[oldKey];
     delete storage[oldKey];
     return result;
  }
  someInstance.size = function() {
    return Object.keys(storage).length
  }
  return someInstance;
}
