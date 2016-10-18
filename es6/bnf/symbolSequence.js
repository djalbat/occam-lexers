'use strict';

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

var END_OF_LINE = '<END_OF_LINE>',
    NO_WHITESPACE = '<NO_WHITESPACE>',
    symbolDelimiterRegExp = new RegExp(`\\s+|(${END_OF_LINE})|(${NO_WHITESPACE})`);

SymbolSequence.END_OF_LINE = END_OF_LINE;
SymbolSequence.NO_WHITESPACE = NO_WHITESPACE;

module.exports = SymbolSequence;
