'use strict';

const Example = require('../example'),
      ExtendedBNFLexer = require('../extendedBNF/lexer');

class ExtendedBNFExample {
  static run() {
    const grammar = ExtendedBNFLexer.grammar,
          Lexer = ExtendedBNFLexer;

    Example.run(grammar, Lexer);
  }
}

module.exports = ExtendedBNFExample;
