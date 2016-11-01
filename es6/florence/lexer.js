'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    CommonLexer = require('../common/lexer');

class FlorenceLexer extends CommonLexer {
  linesFromContent(content, context) {
    context = context || new Context(false);  ///

    var lines = super.linesFromContent(content, context);

    return lines;
  }

  static terminalSymbolsRegExpPattern() { return CommonLexer.terminalSymbolsRegExpPattern(grammar); }

  static significantTokenTypes() { return CommonLexer.significantTokenTypes(grammar); }

  static fromNothing() {
    var rules = CommonLexer.rulesFromGrammar(grammar),
        florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;
