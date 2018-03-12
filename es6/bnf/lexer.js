'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      specialSymbols = require('./specialSymbols'),
      NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

class BNFLexer extends CommonLexer {
  processCommentTokens(tokensOrContents, inComment) { return inComment; }

  processEndOfLineTokens(tokensOrContents) {
    NonSignificantEndOfLineTokens.process(tokensOrContents);
  }

  significantTokensFromBNF(bnf) {
    const content = bnf,  ///
          tokens = super.tokensFromContent(content),
          significantTokens = significantTokensFromTokens(tokens);

    return significantTokens;
  }

  static fromNothing() { return CommonLexer.fromNothing(BNFLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BNFLexer, entries); }
}

Object.assign(BNFLexer, {
  entries: entries,
  specialSymbols: specialSymbols
});

module.exports = BNFLexer;

function significantTokensFromTokens(tokens) {
  const significantTokens = tokens.reduce(function(significantTokens, token) {
    const tokenSignificant = token.isSignificant();

    if (tokenSignificant) {
      const significantToken = token; ///

      significantTokens.push(significantToken);
    }

    return significantTokens;
  }, []);

  return significantTokens;
}
