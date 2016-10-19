'use strict';

var specialSymbols = require('../specialSymbols');

class SymbolSequence {
  constructor(symbols) {
    this.symbols = symbols;
  }

  mapSymbols(cb) {
    return this.symbols.map(cb);
  }
  
  reduceSymbols(cb, initialValue) {
    return this.symbols.reduce(cb, initialValue);
  }
  
  static fromChoice(choice) {
    var symbols = choice.split(symbolDelimiterRegExp).reduce(function(symbols, symbol) {
          if (symbol !== undefined) {
            symbols.push(symbol);
          }
          return symbols;
        }, []),
        expression = new SymbolSequence(symbols);
    
    return expression;
  }
}

var symbolDelimiterRegExp = new RegExp(`\\s+|(${specialSymbols.END_OF_LINE})|(${specialSymbols.NO_WHITESPACE})`);

module.exports = SymbolSequence;
