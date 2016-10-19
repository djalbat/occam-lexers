'use strict';

var symbolTypes = require('../symbolTypes');

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

var symbolDelimiterRegExp = new RegExp(`\\s+|(${symbolTypes.END_OF_LINE})|(${symbolTypes.NO_WHITESPACE})`);

module.exports = SymbolSequence;
