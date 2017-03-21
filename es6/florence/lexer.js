'use strict';

const Line = require('./line'),
      grammar = require('./grammar'),
      Context = require('../common/context'),
      CommonLexer = require('../common/lexer');

class FlorenceLexer extends CommonLexer {
  linesFromContents(contents, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
    const context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = super.linesFromContents(contents, firstLineIndex, context);

    return lines;
  }

  static getSignificantTokenTypes() {
    const significantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar);

    return significantTokenTypes;
  }

  static fromNothing() {
    const rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;
