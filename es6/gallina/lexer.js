'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    CommonLexer = require('../common/lexer');

class GallinaLexer extends CommonLexer {
  linesFromContent(content, context) {
    context = context || new Context(0);  ///
    
    var lines = super.linesFromContent(content, context);
    
    return lines;
  }

  static terminalSymbolsRegExpPattern() {
    var terminalSymbolsRegExpPattern = CommonLexer.terminalSymbolsRegExpPattern(grammar);

    return terminalSymbolsRegExpPattern;
  }

  static significantTokenTypes() {
    var significantTokenTypes = [
      'string',
      'ident',
      'num'
    ];

    return significantTokenTypes;
  }
  
  static fromNothing() {
    var rules = CommonLexer.rulesFromGrammar(grammar),
        gallinaLexer = new GallinaLexer(rules, Line);

    return gallinaLexer;
  }
}

module.exports = GallinaLexer;
