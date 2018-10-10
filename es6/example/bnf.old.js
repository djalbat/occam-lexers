'use strict';

const Example = require('../example'),
      BNFLexer = require('../bnf/lexer');

class BNFExample {
  static run() {
    const { entries } = BNFLexer,
          Lexer = BNFLexer;

    Example.run(entries, Lexer);
  }
}

module.exports = BNFExample;
