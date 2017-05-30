'use strict';

const Line = require('./line'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer');

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
          basicLexer = BasicLexer.fromgrammar(grammar);

    return basicLexer;
  }
}

module.exports = BasicLexer;

BasicLexer.grammar = [

  { "terminal"    : "\\+|\\-|\\*|\\/|\\(|\\)|\\d+" }

];
