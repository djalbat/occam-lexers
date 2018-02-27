'use strict';

const BNFLexer = require('../bnf/lexer');

class CustomGrammarBNFLexer extends BNFLexer {
  static fromNothing() { return BNFLexer.fromNothing(CustomGrammarBNFLexer); }
}

module.exports = CustomGrammarBNFLexer;
