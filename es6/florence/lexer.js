'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      tokenUtilities = require('../utilities/token'),
      defaultLexicalPattern = require('./defaultLexicalPattern'),
      EndOfLineNonSignificantToken = require('../common/token/significant/endOfLine');

const { tokenise } = tokenUtilities;

class FlorenceLexer extends CommonLexer {
  tokeniseEndOfLines(content) { return tokenise(content, EndOfLineNonSignificantToken); }

  matchSinglyQuotedStringLiteral(content) { return null; }

  static fromEntries(entries) {
    entries =

      [

        { "custom" : defaultLexicalPattern }  ///

      ].concat(entries);  ///

    return CommonLexer.fromEntries(FlorenceLexer, entries);
  }

  static fromNothing() { return FlorenceLexer.fromEntries(entries); }
}

Object.assign(FlorenceLexer, {
  entries
});

module.exports = FlorenceLexer;
