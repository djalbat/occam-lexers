'use strict';

const Example = require('../example'),
      FlorenceLexer = require('../florence/lexer'),
      florenceGrammar = require('../florence/grammar');

class FlorenceExample {
  static run() {
    Example.run(florenceGrammar, FlorenceLexer);
  }
}

module.exports = FlorenceExample;
