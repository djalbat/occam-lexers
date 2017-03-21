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

  static indexOf(array, element) {
    let index = undefined;  ///

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
    const grammarEntryKeys = Object.keys(grammarEntry),
          firstGrammarEntryKey = first(grammarEntryKeys),
          type = firstGrammarEntryKey;  ///

    return type;
  };

  static regExpFromGrammarEntry(grammarEntry) {
    const type = util.typeFromGrammarEntry(grammarEntry),
          regExp = grammarEntry[type];

    return regExp;
  };

  static findRegExpFromType(grammar, type) {
    const entry = grammar.find(function(entry) {
            const grammarType = util.typeFromGrammarEntry(entry),
                  found = (grammarType === type);
  
            return found;
          }),
          regExp = util.regExpFromGrammarEntry(entry);

    return regExp;
  };
}

module.exports = util;

function first(array) { return array[0]; }
