'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

class LaTeXLexer extends CommonLexer {
  processEndOfLineTokens(tokensOrContents) {
    NonSignificantEndOfLineTokens.process(tokensOrContents);
  }

  processRegularExpressionTokens(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(LaTeXLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(LaTeXLexer, entries); }
}

Object.assign(LaTeXLexer, {
  entries: entries
});

module.exports = LaTeXLexer;
