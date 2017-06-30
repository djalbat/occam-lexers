'use strict';

const Example = require('../example'),
      BasicLexer = require('../basic/lexer');

class BasicExample {
  static run() {
    const entries = BasicLexer.entries,
          Lexer = BasicLexer;

    Example.run(entries, Lexer);
  }
}

module.exports = BasicExample;
