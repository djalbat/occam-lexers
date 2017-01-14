'use strict';

var Example = require('../example'),
    GallinaLexer = require('../gallina/lexer');

var gallinaLexer = GallinaLexer.fromNothing();

class GallinaExample {
  static run() {
    Example.contentTextAreaOnChange(function(contextTextAreaValue) {
      Example.updateTokens(gallinaLexer);
    });

    Example.updateTokens(gallinaLexer);
  }
}

module.exports = GallinaExample;
