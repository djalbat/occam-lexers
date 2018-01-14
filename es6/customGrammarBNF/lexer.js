'use strict';

const BNFLexer = require('../bnf/lexer'),
      CustomGrammarBNFLine = require('../customGrammarBNF/line');

class CustomGrammarBNFLexer extends BNFLexer {
  static fromNothing() {
    const bnfLexer = BNFLexer.fromNothing(),
          rules = bnfLexer.getRules(),
          Line = CustomGrammarBNFLine,  ///
          customGrammarBNFLexer = new CustomGrammarBNFLexer(rules, Line);

    return customGrammarBNFLexer;
  }
}

module.exports = CustomGrammarBNFLexer;
