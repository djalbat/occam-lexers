'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class BNFLexer extends CommonLexer {
  matchMultiLineComment(content, inComment) { return null; }

  matchSingleLineComment(content, inComment) { return null; }

  matchSinglyQuotedStringLiteral(content) { return null; }

  tokensFromBNF(bnf) {
    const content = bnf,  ///
          tokens = super.tokenise(content);

    return tokens;
  }

  static fromNothing() { return CommonLexer.fromNothing(BNFLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BNFLexer, entries); }
}

Object.assign(BNFLexer, {
  entries
});

module.exports = BNFLexer;
