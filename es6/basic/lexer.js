'use strict';

const entries = require('./entries'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer'),
      CommentTokens = require('./tokens/comment'),
      EndOfLineTokens = require('./tokens/endOfLine'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class BasicLexer extends CommonLexer {
  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          basicLexer = new BasicLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

    return basicLexer;
  }

  static fromNothing() {
    const basicLexer = BasicLexer.fromEntries(entries);

    return basicLexer;
  }
}

Object.assign(BasicLexer, {
  entries: entries
});

module.exports = BasicLexer;
