'use strict';

const entries = require('../bnf/entries'),
      CommonLexer = require('../common/lexer');

class CustomGrammarBNFLexer extends CommonLexer {
  processCommentTokens(tokensOrContents, inComment) { return inComment; }

  postProcessMiddleOfCommentTokens(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(CustomGrammarBNFLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CustomGrammarBNFLexer, entries); }
}

Object.assign(CustomGrammarBNFLexer, {
  entries
});

module.exports = CustomGrammarBNFLexer;
