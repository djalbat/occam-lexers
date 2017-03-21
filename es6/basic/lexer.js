'use strict';

const Line = require('./line'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer');

class BasicLexer extends CommonLexer {
  static getSignificantTokenTypes() {
    const significantTokenTypes = []; ///

    return significantTokenTypes;
  }

  static fromGrammar(grammar) {
    const rules = Rules.fromGrammar(grammar),
          basicLexer = new BasicLexer(rules, Line);

    return basicLexer;
  }
}

module.exports = BasicLexer;
