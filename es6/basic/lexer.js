'use strict';

var Line = require('./line'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

class BasicLexer extends CommonLexer {
  static fromGrammar(grammar) {
    var rules = Rules.fromGrammar(grammar),
        basicLexer = new BasicLexer(rules, Line);

    return basicLexer;
  }

  static tokensFromLines(lines) { return CommonLexer.tokensFromLines(lines); }

  static significantTokenTypes() {
    var significantTokenTypes = [];

    return significantTokenTypes;
  }
}

module.exports = BasicLexer;
