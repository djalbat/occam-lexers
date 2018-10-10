'use strict';

const Example = require('../example'),
      FlorenceLexer = require('../florence/lexer');

class FlorenceExample {
  static run() {
    const { entries } = FlorenceLexer,
          Lexer = FlorenceLexer;

    Example.run(entries, Lexer);
  }
}

module.exports = FlorenceExample;
