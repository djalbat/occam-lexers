'use strict';

var Example = require('./example'),
    grammar = require('../../es6/florence/grammar'),
    FlorenceLexer = require('../../es6/florence/lexer');

var florenceLexer = FlorenceLexer.fromGrammar(grammar);

class FlorenceExample extends Example {
  static run() {
    Example.contentTextArea.onChange(function(contextTextAreaValue) {
      Example.updateTokens(contextTextAreaValue, florenceLexer);
    });
  }
}

module.exports = FlorenceExample;
