 

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    var innerArray = [];
    innerArray.push([k, v]);
    this._storage.set(index, innerArray);
  } else {
    this._storage.set(index,[k,v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.storage.length; i++) {
    var innerArray = this._storage.storage[i];
    if (innerArray[0] === k) {
      return innerArray[1]; 
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


