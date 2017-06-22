'use strict';

const Example = require('../example'),
      ExtendedBNFLexer = require('../extendedBNF/lexer');

class ExtendedBNFExample {
  static run() {
    const grammar = ExtendedBNFLexer.grammar,
          lexer = ExtendedBNFLexer;

    Example.run(grammar, lexer);
  }
}

module.exports = ExtendedBNFExample;
