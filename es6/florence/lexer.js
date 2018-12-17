'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant');

class FlorenceLexer extends CommonLexer {
  tokeniseEndOfLines(tokensOrContents) { SignificantEndOfLineTokens.tokenise(tokensOrContents); }

  tokeniseRegularExpressions(tokensOrContents) {}

  tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(FlorenceLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(FlorenceLexer, entries); }
}

Object.assign(FlorenceLexer, {
  entries
});

module.exports = FlorenceLexer;
