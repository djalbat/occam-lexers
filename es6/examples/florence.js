'use strict';

const Example = require('../example'),
      FlorenceLexer = require('../florence/lexer');

class FlorenceExample {
  static run() {
    const grammar = FlorenceLexer.grammar,
          lexer = FlorenceLexer;

    Example.run(grammar, lexer);
  }
}

module.exports = FlorenceExample;
