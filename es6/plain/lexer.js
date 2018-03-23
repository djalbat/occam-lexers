'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

class PlainLexer extends CommonLexer {
  processEndOfLineTokens(tokensOrContents) {
    NonSignificantEndOfLineTokens.process(tokensOrContents);
  }

  processCommentTokens(tokensOrContents, inComment) { return inComment; }

  postProcessMiddleOfCommentTokens(tokensOrContents) {}

  processRegularExpressionTokens(tokensOrContents) {}

  processStringLiteralTokens(tokensOrContents) {}

  static fromEntries(entries) { return CommonLexer.fromEntries(PlainLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(PlainLexer); }
}

Object.assign(PlainLexer, {
  entries: entries
});

module.exports = PlainLexer;
