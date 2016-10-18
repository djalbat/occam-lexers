'use strict';

class SymbolSequence {
  constructor(symbols) {
    this.symbols = symbols;
  }

  mapSymbols(cb) {
    return this.symbols.map(cb);
  }
  
  static fromChoice(choice) {
    var symbols = choice.split(/\s+|(<NO_WHITESPACE>)|(<END_OF_LINE>)/).reduce(function(symbol, symbols) {
          if (symbol !== undefined) {
            symbols.push(symbols);
          }
          return symbols;
        }, []),
        expression = new SymbolSequence(symbols);
    
    return expression;
  }
}

module.exports = SymbolSequence;
