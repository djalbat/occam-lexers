'use strict';

const Example = require('../example'),
      FlorenceLexer = require('../florence/lexer');

const florenceLexer = FlorenceLexer.fromNothing();

class FlorenceExample {
  static run() {
    Example.contentTextareaOnKeyUp(function() {
      Example.updateTokens(florenceLexer);
    });

    Example.updateTokens(florenceLexer);
  }
}

module.exports = FlorenceExample;
