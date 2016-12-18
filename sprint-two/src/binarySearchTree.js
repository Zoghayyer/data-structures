var BinarySearchTree = function(value) {
  var instances = {};
  instances.value = value;
  instances.left = null;
  instances.right = null; 
  _.extend(instances, methodsInstance);
  return instances;
};
var methodsInstance = {};
methodsInstance.insert = function(val) {
  if (this.value > val) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (this.value < val) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } 
};
methodsInstance.contains = function(val) {
  if (this.value === val) {
    return true;
  } else if (this.right && this.value < val ) {
    return this.right.contains(val);
  } else if (this.left && this.value > val) {
    return this.left.contains(val);
  } 
  return false;
};
methodsInstance.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  } else if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
 

/*
 * Complexity: What is the time complexity of the above functions?
 */
 