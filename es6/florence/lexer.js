'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      defaultLexicalPattern = require('./defaultLexicalPattern'),
      SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant');

class FlorenceLexer extends CommonLexer {
  tokeniseEndOfLines(tokensOrContents) { SignificantEndOfLineTokens.tokenise(tokensOrContents); }

  tokeniseRegularExpressions(tokensOrContents) {}

  tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}

  static fromEntries(entries) {
    entries = [

      { "custom" : defaultLexicalPattern }

    ].concat(entries);  ///

    return CommonLexer.fromEntries(FlorenceLexer, entries);
  }

  static fromNothing() { return FlorenceLexer.fromEntries(entries); }
}

Object.assign(FlorenceLexer, {
  entries
});

module.exports = FlorenceLexer;
