'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class PlainLexer extends CommonLexer {
  processCommentTokens(tokensOrContents, inComment) { return inComment; }

  postProcessMiddleOfCommentTokens(tokensOrContents) {}

  processRegularExpressionTokens(tokensOrContents) {}

  processStringLiteralTokens(tokensOrContents) {}

  static fromEntries(entries) { return CommonLexer.fromEntries(PlainLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(PlainLexer); }
}

Object.assign(PlainLexer, {
  entries
});

module.exports = PlainLexer;
