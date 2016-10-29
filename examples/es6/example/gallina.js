'use strict';

var Example = require('../example'),
    GallinaLexer = require('../../../es6/gallina/lexer');

var gallinaLexer = GallinaLexer.fromNothing();

class GallinaExample {
  static run() {
    Example.contentTextAreaOnChange(function(contextTextAreaValue) {
      Example.updateTokens(gallinaLexer);
    });
  }
}

module.exports = GallinaExample;
