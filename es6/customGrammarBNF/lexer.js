'use strict';

const entries = require('../bnf/entries'),
      CommonLexer = require('../common/lexer'),
      NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

class CustomGrammarBNFLexer extends CommonLexer {
  processCommentTokens(tokensOrContents, inComment) { return inComment; }

  postProcessMiddleOfCommentTokens(tokensOrContents) {}

  processEndOfLineTokens(tokensOrContents) {
    NonSignificantEndOfLineTokens.process(tokensOrContents);
  }

  static fromNothing() { return CommonLexer.fromNothing(CustomGrammarBNFLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CustomGrammarBNFLexer, entries); }
}

Object.assign(CustomGrammarBNFLexer, {
  entries: entries
});

module.exports = CustomGrammarBNFLexer;
