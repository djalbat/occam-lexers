'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var rules = Rules.fromGrammar(grammar);

class GallinaLexer extends CommonLexer {
  linesFromContent(content, context) {
    context = context || new Context(0);  ///
    
    var lines = super.linesFromContent(content, context);
    
    return lines;
  }
  
  static fromNothing() {
    var gallinaLexer = new GallinaLexer(rules, Line);
    
    return gallinaLexer;
  }
  
}

module.exports = GallinaLexer;
