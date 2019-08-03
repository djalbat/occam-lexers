'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant');

class PlainLexer extends CommonLexer {
  tokeniseComments(tokensOrContents, inComment) { return inComment; }

  tokeniseEndOfLines(tokensOrContents) { SignificantEndOfLineTokens.tokenise(tokensOrContents); }

  tokeniseRegularExpressions(tokensOrContents) {}

  tokeniseDoublyQuotedStringLiterals(tokensOrContents) {}

  tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromEntries(PlainLexer, entries); }

  static fromEntries(entries) { return CommonLexer.fromEntries(PlainLexer, entries); }
}

Object.assign(PlainLexer, {
  entries
});

module.exports = PlainLexer;
