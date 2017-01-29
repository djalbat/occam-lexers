'use strict';

var Line = require('./line'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

class BasicLexer extends CommonLexer {
  static getSignificantTokenTypes() {
    var significantTokenTypes = []; ///

    return significantTokenTypes;
  }

  static fromGrammar(grammar) {
    var rules = Rules.fromGrammar(grammar),
        basicLexer = new BasicLexer(rules, Line);

    return basicLexer;
  }
}

module.exports = BasicLexer;
