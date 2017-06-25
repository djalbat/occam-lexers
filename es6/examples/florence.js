'use strict';

const Example = require('../example'),
      FlorenceLexer = require('../florence/lexer');

class FlorenceExample {
  static run() {
    const grammar = FlorenceLexer.grammar,
          Lexer = FlorenceLexer;

    Example.run(grammar, Lexer);
  }
}

module.exports = FlorenceExample;
