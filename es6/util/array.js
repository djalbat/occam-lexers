'use strict';

class arrayUtil {
  static first(array) { return array[0]; }
  
  static splice(array, start, deleteCount, itemsArray) {
    const args = [start, deleteCount].concat(itemsArray);
  
    Array.prototype.splice.apply(array, args);
  }
}

module.exports = arrayUtil;
