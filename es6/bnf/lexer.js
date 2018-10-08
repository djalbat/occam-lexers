'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      specialSymbols = require('./specialSymbols');

class BNFLexer extends CommonLexer {
  tokeniseComments(tokensOrContents, inComment) { return inComment; }

  reTokeniseMiddleOfCommentTokens(tokensOrContents) {}

  tokensFromBNF(bnf) {
    const content = bnf,  ///
          tokens = super.tokenise(content);

    return tokens;
  }

  static fromNothing() { return CommonLexer.fromNothing(BNFLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BNFLexer, entries); }
}

Object.assign(BNFLexer, {
  entries,
  specialSymbols
});

module.exports = BNFLexer;
