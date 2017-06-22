'use strict';

const Line = require('./line'),
      grammar = require('./grammar'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer'),
      WhitespaceToken = require('../common/token/significant/whitespace');

class BasicLexer extends CommonLexer {
  static significantTokenTypes() {
    const grammar = BasicLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([
            WhitespaceToken.type
          ]);

    return significantTokenTypes;
  }


  static fromGrammar(grammar) {
    const rules = Rules.fromGrammar(grammar),
          basicLexer = new BasicLexer(rules, Line);

    return basicLexer;
  }

  static fromNothing() {
    const grammar = BasicLexer.grammar,
          basicLexer = BasicLexer.fromGrammar(grammar);

    return basicLexer;
  }
}

module.exports = BasicLexer;

BasicLexer.grammar = grammar;
