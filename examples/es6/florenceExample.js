'use strict';

var Example = require('./example'),
    Lexer = require('../../es6/florence/lexer');

class FlorenceExample extends Example {
  static run() {
    Example.contentTextArea.onChange(function(contextTextAreaValue) {
      Example.updateTokens(contextTextAreaValue, Lexer);
    });
  }
}

module.exports = FlorenceExample;
