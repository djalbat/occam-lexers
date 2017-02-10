'use strict';

class util {
  static minimumBarMinusOne() {
    var values = Array.prototype.slice.call(arguments),
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
    var args = [start, deleteCount].concat(itemsArray);
  
    Array.prototype.splice.apply(array, args);
  }

  static indexOf(array, element) {
    var index = undefined;  ///

    array.some(function(arrayElement, arrayIndex) {
      if (element === arrayElement) {
        index = arrayIndex;

        return true;
      } else {
        return false;
      }
    });

    return index;
  }

  static typeFromGrammarEntry(grammarEntry) {
    var grammarEntryKeys = Object.keys(grammarEntry),
        firstGrammarEntryKey = first(grammarEntryKeys),
        type = firstGrammarEntryKey;  ///

    return type;
  };

  static regExpFromGrammarEntry(grammarEntry) {
    var type = util.typeFromGrammarEntry(grammarEntry),
        regExp = grammarEntry[type];

    return regExp;
  };

  static findRegExpFromType(grammar, type) {
    var entry = grammar.find(function(entry) {
          var grammarType = util.typeFromGrammarEntry(entry),
              found = (grammarType === type);

          return found;
        }),
        regExp = util.regExpFromGrammarEntry(entry);

    return regExp;
  };
}

module.exports = util;

function first(array) { return array[0]; }