'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      tokenUtilities = require('../utilities/token'),
      EndOfLineNonSignificantToken = require('../common/token/nonSignificant/endOfLine');

const { tokenise } = tokenUtilities;

class BasicLexer extends CommonLexer {
  tokensFromContent(tokens, content, inComment) {
    return inComment;
  }

  tokeniseEndOfLines(content) { return tokenise(content, EndOfLineNonSignificantToken); }

  static fromNothing() { return CommonLexer.fromNothing(BasicLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}

Object.assign(BasicLexer, {
  entries
});

module.exports = BasicLexer;
