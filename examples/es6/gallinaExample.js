'use strict';

var Example = require('./example'),
    Lexer = require('../../es6/gallina/lexer');

class GallinaExample extends Example {
  static run() {
    Example.contentTextArea.onChange(function(contextTextAreaValue) {
      Example.updateTokens(contextTextAreaValue, Lexer);
    });
  }
}

module.exports = GallinaExample;
