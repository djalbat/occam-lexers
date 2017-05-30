'use strict';

const Line = require('./line'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer'),
      WhitespaceToken = require('../common/token/significant/whitespace');

class BNFLexer extends CommonLexer {
  static significantTokenTypes() {
    const grammar = BNFLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([
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
          basicLexer = BNFLexer.fromgrammar(grammar);

    return basicLexer;
  }
}

module.exports = BNFLexer;

BNFLexer.grammar = [

  { "regularExpression": "\\/[^/]+\\/" },

  { "noWhitespace": "<NO_WHITESPACE>" },

  { "endOfLine": "<END_OF_LINE>" },

  { "special": "::=|\\(|\\)|!|&|\\|" },

  { "operator": "\\?|\\*|\\+" },

  { "type": "\\[[^/]+\\]" },

  { "name": "\\w+" }

];
