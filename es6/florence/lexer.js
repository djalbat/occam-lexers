'use strict';

const Line = require('./line'),
      grammar = require('./grammar'),
      Context = require('../common/context'),
      CommonLexer = require('../common/lexer'),
      StringToken = require('../common/token/significant/string'),
      WhitespaceToken = require('../common/token/significant/whitespace'),
      EndOfLineToken = require('./token/significant/endOfLine');

class FlorenceLexer extends CommonLexer {
  linesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
    const context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = super.linesFromContent(content, firstLineIndex, context);

    return lines;
  }

  static significantTokenTypes() {
    const grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([
            StringToken.type,
            WhitespaceToken.type,
            EndOfLineToken.type
          ]);

    return significantTokenTypes;
  }

  static fromGrammar(grammar) {
    const rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }

  static fromNothing() {
    const rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;
