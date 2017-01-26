'use strict';

var specialSymbols = require('../specialSymbols');

class SymbolSequence {
  constructor(symbols) {
    this.symbols = symbols;
  }

  mapSymbols(callback) {
    return this.symbols.map(callback);
  }
  
  reduceSymbols(callback, initialValue) {
    return this.symbols.reduce(callback, initialValue);
  }
  
  static fromChoice(choice) {
    var symbols = choice.split(symbolDelimiterRegExp).reduce(function(symbols, symbol) {
          if (  (symbol === '')
             || (symbol === undefined)  ) {

          } else {
            symbols.push(symbol);
          }
      
          return symbols;
        }, []),
        expression = new SymbolSequence(symbols);
    
    return expression;
  }
}

var symbolDelimiterRegExp = new RegExp(`\\s+|(${specialSymbols.END_OF_LINE}(?:\\?|\\+|\\*))|(${specialSymbols.NO_WHITESPACE})`);

module.exports = SymbolSequence;

