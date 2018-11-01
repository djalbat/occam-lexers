'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class CSSLexer extends CommonLexer {
  tokeniseRegularExpressions(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(CSSLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CSSLexer, entries); }
}

Object.assign(CSSLexer, {
  entries
});

module.exports = CSSLexer;
