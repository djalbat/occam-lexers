'use strict';

var Line = require('./line'),
    Context = require('./context'),
    grammar = require('./grammar'),
    CommonLexer = require('../common/lexer');

class FlorenceLexer extends CommonLexer {
  linesFromContents(contents, context) {
    var inComment = false;

    context = context || new Context(inComment);  ///

    var lines = super.linesFromContents(contents, context);

    return lines;
  }

  static getSignificantTokenTypes() {
    var significantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar);

    return significantTokenTypes;
  }

  static fromNothing() {
    var rules = CommonLexer.rulesFromGrammar(grammar),
        florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;
