'use strict';

var Example = require('./example'),
    GallinaLexer = require('../../es6/gallina/lexer');

var gallinaLexer = GallinaLexer.fromNothing();

class GallinaExample extends Example {
  static run() {
    Example.contentTextArea.onChange(function(contextTextAreaValue) {
      Example.updateTokens(contextTextAreaValue, gallinaLexer);
    });
  }
}

module.exports = GallinaExample;
