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

  static typeFromEntry(entry) {
    var type = Object.keys(entry)[0];  ///

    return type;
  };

  static regExpFromEntry(entry) {
    var type = util.typeFromEntry(entry),
        regExp = entry[type];

    return regExp;
  };

  static findRegExpFromType(grammar, type) {
    var entry = grammar.find(function(entry) {
          var grammarType = util.typeFromEntry(entry),
              found = (grammarType === type);

          return found;
        }),
        regExp = util.regExpFromEntry(entry);

    return regExp;
  };
}

module.exports = util;
