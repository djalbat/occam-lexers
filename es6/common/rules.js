'use strict';

const necessary = require('necessary');

const Rule = require('./rule');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

class Rules {
  constructor(array) {
    this.array = array;
  }

  map(callback ) { return this.array.map(callback); }

  reduce(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  getRule(depth) {
    const rule = (this.array[depth] || null); ///

    return rule;
  }

  addRule(rule) {
    this.array.unshift(rule); ///
  }
  
  static fromEntries(entries) {
    const significantTokenTypes = significantTokenTypesFromEntries(entries),
          array = significantTokenTypes.map(function(significantTokenType) {
            const regularExpressionPattern = findRegularExpressionPattern(significantTokenType, entries),
                  rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);
      
            return rule;      
          }),
          rules = new Rules(array);
    
    return rules;
  }
}

module.exports = Rules;

function findRegularExpressionPattern(significantTokenType, entries) {
  const entry = entries.find(function(entry) {
          const entryKeys = Object.keys(entry),
                firstEntryKey = first(entryKeys),
                entrySignificantTokenType = firstEntryKey;  ///

          if (entrySignificantTokenType === significantTokenType) {
            return true;
          }
        }) || null, ///
        regularExpressionPattern = (entry !== null) ?
                                      entry[significantTokenType] : ///
                                        null;

  return regularExpressionPattern;
}

function significantTokenTypesFromEntries(entries) {
  const significantTokenTypes = entries.map(function(entry) {
    const entryKeys = Object.keys(entry),
          firstEntryKey = first(entryKeys),
          significantTokenType = firstEntryKey; ///

    return significantTokenType;
  });

  return significantTokenTypes;
}
