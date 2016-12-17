 

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
    var indexArray = this._storage.get(index);
    indexArray.push([k, v]);
    this._storage.set(index, indexArray);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexArray = this._storage.get(index);
  var value;
  for (var i = 0; i < indexArray.length; i++) {
    var innerArray = indexArray[i];
    if (innerArray[0] === k) {
      value = innerArray[1]; 
    }
  }
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var innerArray = this._storage.get(index);
  for (var i = 0; i < innerArray.length; i++) {
    if (innerArray[i][0] === k) {
      innerArray.splice(i, 1);
    }
  }
};
 


/*
 * Complexity: What is the time complexity of the above functions?
 */


