'use strict';

const Line = require('./line'),
      grammar = require('./grammar'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer');

class BasicLexer extends CommonLexer {
  static significantTokenTypes() {
    const grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes;
    
    return significantTokenTypes;
  }

  static fromGrammar(grammar) {
    const rules = Rules.fromGrammar(grammar),
          basicLexer = new BasicLexer(rules, Line);

    return basicLexer;
  }

  static fromNothing() {
    const rules = Rules.fromGrammar(grammar),
          basicLexer = new BasicLexer(rules, Line);

    return basicLexer;
  }
}

module.exports = BasicLexer;
