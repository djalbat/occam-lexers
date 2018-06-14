'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class LaTeXLexer extends CommonLexer {
  processRegularExpressionTokens(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(LaTeXLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(LaTeXLexer, entries); }
}

Object.assign(LaTeXLexer, {
  entries
});

module.exports = LaTeXLexer;
