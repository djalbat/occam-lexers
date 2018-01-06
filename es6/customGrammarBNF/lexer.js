'use strict';

const BNFLexer = require('../bnf/lexer');

class CustomGrammarBNFLexer extends BNFLexer {
  static fromNothing() {
    const bnfLexer = BNFLexer.fromNothing(),
          rules = bnfLexer.getRules(),
          Line = bnfLexer.getLine(),
          customGrammarBNFLexer = new CustomGrammarBNFLexer(rules, Line);

    return customGrammarBNFLexer;
  }
}

module.exports = CustomGrammarBNFLexer;
