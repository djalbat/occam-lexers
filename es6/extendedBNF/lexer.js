'use strict';

const Line = require('./line'),
      grammar = require('./grammar'),
      specialSymbols = require('./specialSymbols'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer'),
      StringToken = require('../common/token/significant/string'),
      WhitespaceToken = require('../common/token/significant/whitespace');

class ExtendedBNFLexer extends CommonLexer {
  linesFromGrammar(grammar) {
    const content = grammar,  ///
          lines = super.linesFromContent(content);

    return lines;
  }

  static significantTokenTypes() {
    const grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([
            StringToken.type,
            WhitespaceToken.type
          ]);

    return significantTokenTypes;
  }

  static fromGrammar(grammar) {
    const rules = Rules.fromGrammar(grammar),
          extendedBNFLexer = new ExtendedBNFLexer(rules, Line);

    return extendedBNFLexer;
  }

  static fromNothing() {
    const extendedBNFLexer = ExtendedBNFLexer.fromGrammar(grammar);

    return extendedBNFLexer;
  }
}

module.exports = ExtendedBNFLexer;

ExtendedBNFLexer.grammar = grammar;

ExtendedBNFLexer.specialSymbols = specialSymbols;
