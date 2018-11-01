'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant');

class CSSLexer extends CommonLexer {
  tokeniseEndOfLines(tokensOrContents) { SignificantEndOfLineTokens.tokenise(tokensOrContents); }

  tokeniseRegularExpressions(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(CSSLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CSSLexer, entries); }
}

Object.assign(CSSLexer, {
  entries
});

module.exports = CSSLexer;
