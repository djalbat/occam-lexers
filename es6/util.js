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

  static regExpPattern(regExp) {
    var regExpStr = regExp.toString(),
        regExpPattern = regExpStr.replace(/^\//,'').replace(/\/(?:[^\/]*?)$/,''); ///
    
    return regExpPattern;
  }

  static typeFromEntry(entry) {
    var type = Object.keys(entry)[0];  ///

    return type;
  };

  static findRegExpFromType(grammar, type) {
    var regExp = grammar.find(function(entry) {
      var grammarType = util.typeFromEntry(entry),
          found = (grammarType === type);

      return found;
    });

    return regExp;
  };
}

module.exports = util;
