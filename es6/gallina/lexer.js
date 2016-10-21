'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

class GallinaLexer extends CommonLexer {
  linesFromContent(content, context) {
    context = context || new Context(0);  ///
    
    var lines = super.linesFromContent(content, context);
    
    return lines;
  }

  terminalSymbolsRegExpPattern() {
    var terminalSymbolsRegExpPattern = super.terminalSymbolsRegExpPattern(grammar);

    return terminalSymbolsRegExpPattern;
  }

  significantTokenTypes() {
    var significantTokenTypes = [
      'string',
      'access_ident',
      'ident',
      'num'
    ];

    return significantTokenTypes;
  }
  
  static fromNothing() {
    var rules = Rules.fromGrammar(grammar),
        gallinaLexer = new GallinaLexer(rules, Line);
    
    return gallinaLexer;
  }  
}

module.exports = GallinaLexer;
