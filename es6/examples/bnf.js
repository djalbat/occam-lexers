'use strict';

const Example = require('../example'),
      BNFLexer = require('../bnf/lexer');

class BNFExample {
  static run() {
    const grammar = BNFLexer.grammar,
          lexer = BNFLexer;

    Example.run(grammar, lexer);
  }
}

module.exports = BNFExample;
