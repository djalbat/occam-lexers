'use strict';

class util {
  static minBarMinusOne() {
    var values = Array.prototype.slice.call(arguments),
        minBarMinusOne = undefined;

    values.forEach(function(value) {
      if (value > -1) {
        minBarMinusOne = ( minBarMinusOne === undefined ) ? value : Math.min(minBarMinusOne, value);
      }
    });

    return minBarMinusOne;
  }

  static spliceArray(array, start, deleteCount, itemsArray) {
    var args = [start, deleteCount].concat(itemsArray);
  
    Array.prototype.splice.apply(array, args);
  }

  static indexOf(array, element) {
    for (var index = 0; index < array.length; index++) {
      if (array[index] === element) {
        return index;
      }
    }
  }
}

module.exports = util;
