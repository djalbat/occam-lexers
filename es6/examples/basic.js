'use strict';

const Example = require('../example'),
      BasicLexer = require('../basic/lexer');

class BasicExample {
  static run() {
    const grammar = BasicLexer.grammar,
          Lexer = BasicLexer;

    Example.run(grammar, Lexer);
  }
}

module.exports = BasicExample;
