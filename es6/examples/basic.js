'use strict';

const Example = require('../example'),
      BasicLexer = require('../basic/lexer');

class BasicExample {
  static run() {
    const grammar = BasicLexer.grammar,
          lexer = BasicLexer;

    Example.run(grammar, lexer);
  }
}

module.exports = BasicExample;
