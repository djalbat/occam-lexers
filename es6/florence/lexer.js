'use strict';

var Line = require('./line'),
    grammar = require('./grammar'),
    Context = require('../common/context'),
    CommonLexer = require('../common/lexer');

class FlorenceLexer extends CommonLexer {
  linesFromContents(contents, minimumLinesLength, previousLineInComment, followingLineInComment) {
    var context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
        lines = super.linesFromContents(contents, context);

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
