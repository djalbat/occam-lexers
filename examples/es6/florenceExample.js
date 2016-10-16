'use strict';

var Example = require('./example'),
    FlorenceLexer = require('../../es6/florence/lexer');

var florenceLexer = FlorenceLexer.fromNothing();

class FlorenceExample extends Example {
  static run() {
    Example.contentTextArea.onChange(function(contextTextAreaValue) {
      Example.updateTokens(contextTextAreaValue, florenceLexer);
    });
  }
}

module.exports = FlorenceExample;
