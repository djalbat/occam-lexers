'use strict';

var Example = require('./example'),
    grammar = require('../../es6/gallina/grammar'),
    GallinaLexer = require('../../es6/gallina/lexer');

var gallinaLexer = GallinaLexer.fromGrammar(grammar);

class GallinaExample extends Example {
  static run() {
    Example.contentTextArea.onChange(function(contextTextAreaValue) {
      Example.updateTokens(contextTextAreaValue, gallinaLexer);
    });
  }
}

module.exports = GallinaExample;
