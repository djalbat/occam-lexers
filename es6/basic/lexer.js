'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class BasicLexer extends CommonLexer {
  tokeniseComments(tokensOrContents, inComment) { return inComment; }

  reTokeniseMiddleOfCommentTokens(tokensOrContents) {}

  tokeniseRegularExpressions(tokensOrContents) {}

  tokeniseStringLiterals(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(BasicLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}

Object.assign(BasicLexer, {
  entries
});

module.exports = BasicLexer;
