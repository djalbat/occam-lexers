'use strict';

const Line = require('./line'),
      grammar = require('./grammar'),
      Context = require('../common/context'),
      CommonLexer = require('../common/lexer'),
      StringToken = require('../common/token/significant/string'),
      EndOfLineToken = require('../common/token/significant/endOfLine'),
      WhitespaceToken = require('../common/token/significant/whitespace');

class FlorenceLexer extends CommonLexer {
  linesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
    const context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = super.linesFromContent(content, firstLineIndex, context);

    return lines;
  }

  static significantTokenTypes() {
    const grammar = grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([
            StringToken.type,
            EndOfLineToken.type,
            WhitespaceToken.type
          ]);

    return significantTokenTypes;
  }

  static fromGrammar(grammar) {
    const rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }

  static fromNothing() {
    const grammar = FlorenceLexer.grammar,
          florenceLexer = FlorenceLexer.fromGrammar(grammar);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;

FlorenceLexer.grammar = grammar;
