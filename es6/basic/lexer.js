'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

class BasicLexer extends CommonLexer {
  processCommentTokens(tokensOrContents, inComment) { return inComment; }

  processEndOfLineTokens(tokensOrContents) {
    NonSignificantEndOfLineTokens.process(tokensOrContents);
  }

  postProcessMiddleOfCommentTokens(tokensOrContents) {}

  processRegularExpressionTokens(tokensOrContents) {}

  processStringLiteralTokens(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(BasicLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}

Object.assign(BasicLexer, {
  entries: entries
});

module.exports = BasicLexer;
