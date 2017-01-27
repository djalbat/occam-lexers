'use strict';

var Example = require('../example'),
    FlorenceLexer = require('../florence/lexer');

var florenceLexer = FlorenceLexer.fromNothing();

class FlorenceExample {
  static run() {
    Example.contentTextAreaOnKeyUp(function() {
      Example.updateTokens(florenceLexer);
    });

    Example.updateTokens(florenceLexer);
  }
}

module.exports = FlorenceExample;
