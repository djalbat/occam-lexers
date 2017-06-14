'use strict';

const Line = require('./line'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer'),
      StringToken = require('../common/token/significant/string'),
      WhitespaceToken = require('../common/token/significant/whitespace');

class BNFLexer extends CommonLexer {
  linesFromGrammar(grammar) {
    const content = grammar,  ///
          lines = super.linesFromContent(content);

    return lines;
  }

  static significantTokenTypes() {
    const grammar = BNFLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([
            StringToken.type,
            WhitespaceToken.type
          ]);

    return significantTokenTypes;
  }

  static fromGrammar(grammar) {
    const rules = Rules.fromGrammar(grammar),
          basicLexer = new BNFLexer(rules, Line);

    return basicLexer;
  }

  static fromNothing() {
    const grammar = BNFLexer.grammar,
          basicLexer = BNFLexer.fromGrammar(grammar);

    return basicLexer;
  }
}

module.exports = BNFLexer;

BNFLexer.grammar = [

  { "regularExpression": "\\/[^/]+\\/" },

  { "special": "::=|\\||<NO_WHITESPACE>|<END_OF_LINE>|\\(|\\)|\\?|\\*|\\+|\\-" },

  { "type": "\\[[^/]+\\]" },

  { "name": "\\w+" }
    
]
;
