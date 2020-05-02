"use strict";

const BNFLexer = require("../bnf/lexer");

class CustomGrammarBNFLexer extends BNFLexer {
  static fromNothing() {
    const bnfLexer = BNFLexer.fromNothing(),
          rules = bnfLexer.getRules(),
          customGrammarBNFLexer = new CustomGrammarBNFLexer(rules);

    return customGrammarBNFLexer;
  }
}

module.exports = CustomGrammarBNFLexer;
