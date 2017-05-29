'use strict';

const Rule = require('./rule'),
      util = require('../util');

class Rules {
  constructor(array) {
    this.array = array;
  }
  
  reduce(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  getRule(depth) {
    const rule = (this.array[depth] || null); ///

    return rule;
  }
  
  static fromGrammar(grammar) {
    const significantTokenTypes = Rules.significantTokenTypesFromGrammar(grammar),
          array = significantTokenTypes.map(function(significantTokenType) {
            const regularExpressionPattern = Rules.findRegularExpressionPattern(significantTokenType, grammar),
                  rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);
      
            return rule;      
          }),
          rules = new Rules(array);
    
    return rules;
  }

  static findRegularExpressionPattern(significantTokenType, grammar) {
    const regularExpressionPattern = grammar.reduce(function(regularExpressionPattern, entry) {
            if (regularExpressionPattern === null) {
              const entryKeys = Object.keys(entry),
                    firstEntryKey = first(entryKeys),
                    entrySignificantTokenType = firstEntryKey;  ///

              if (entrySignificantTokenType === significantTokenType) {
                regularExpressionPattern = entry[significantTokenType];
              }
            }

            return regularExpressionPattern;
          }, null);

    return regularExpressionPattern;
  }

  static significantTokenTypesFromGrammar(grammar) {
    const significantTokenTypes = grammar.map(function(entry) {
            const entryKeys = Object.keys(entry),
                  firstEntryKey = first(entryKeys),
                  significantTokenType = firstEntryKey; ///

            return significantTokenType;
          });

    return significantTokenTypes;
  }
}

module.exports = Rules;

function first(array) { return array[0]; }