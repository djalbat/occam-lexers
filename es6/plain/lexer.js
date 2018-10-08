'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class PlainLexer extends CommonLexer {
  tokeniseComments(tokensOrContents, inComment) { return inComment; }

  reTokeniseMiddleOfCommentTokens(tokensOrContents) {}

  tokeniseRegularExpressions(tokensOrContents) {}

  tokeniseStringLiterals(tokensOrContents) {}

  static fromEntries(entries) { return CommonLexer.fromEntries(PlainLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(PlainLexer); }
}

Object.assign(PlainLexer, {
  entries
});

module.exports = PlainLexer;
