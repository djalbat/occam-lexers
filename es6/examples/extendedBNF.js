'use strict';

const Example = require('../example'),
      ExtendedBNFLexer = require('../extendedBNF/lexer');

class ExtendedBNFExample {
  static run() {
    const entries = ExtendedBNFLexer.entries,
          Lexer = ExtendedBNFLexer;

    Example.run(entries, Lexer);
  }
}

module.exports = ExtendedBNFExample;
