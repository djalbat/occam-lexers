'use strict';

class util {
  static minimumBarMinusOne() {
    const values = Array.prototype.slice.call(arguments),
          minimumBarMinusOne = values.reduce(function(minimumBarMinusOne, value) {
            if (value > -1) {
              minimumBarMinusOne = (minimumBarMinusOne !== null) ?
                                      Math.min(minimumBarMinusOne, value) :
                                        value;
            }
  
            return minimumBarMinusOne;
          }, null);

    return minimumBarMinusOne;
  }

  static spliceArray(array, start, deleteCount, itemsArray) {
    const args = [start, deleteCount].concat(itemsArray);
  
    Array.prototype.splice.apply(array, args);
  }

  static sanitiseContent(content) {
    const sanitisedContent = content.replace(/&/,'&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

    return sanitisedContent;
  }
}

module.exports = util;
