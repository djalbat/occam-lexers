'use strict';

const entries = require('./entries'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer'),
      specialSymbols = require('./specialSymbols'),
      tokensUtilities = require('../utilities/tokens'),
      CommentTokens = require('./tokens/comment'),
      EndOfLineTokens = require('./tokens/endOfLine'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('../common/tokens/stringLiteral'),
      RegularExpressionTokens = require('../common/tokens/regularExpression');

const { significantTokensFromTokens } = tokensUtilities;

class BNFLexer extends CommonLexer {
  significantTokensFromBNF(bnf) {
    const content = bnf,  ///
          tokens = super.tokensFromContent(content),
          significantTokens = significantTokensFromTokens(tokens);

    return significantTokens;
  }

  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          bnfLexer = new BNFLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

    return bnfLexer;
  }

  static fromNothing() { return BNFLexer.fromEntries(entries); }
}

Object.assign(BNFLexer, {
  entries: entries,
  specialSymbols: specialSymbols
});

module.exports = BNFLexer;
