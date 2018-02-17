'use strict';

const BNFLine = require('./line'),
      entries = require('./entries'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer'),
      specialSymbols = require('./specialSymbols'),
      tokensUtilities = require('../utilities/tokens');

const { tokensFromLines } = tokensUtilities;

class BNFLexer extends CommonLexer {
  tokensFromBNF(bnf) {
    const content = bnf,  ///
          lines = super.linesFromContent(content),
          tokens = tokensFromLines(lines);

    return tokens;
  }

  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          bnfLexer = new BNFLexer(rules, BNFLine);

    return bnfLexer;
  }

  static fromNothing() {
    const bnfLexer = BNFLexer.fromEntries(entries);

    return bnfLexer;
  }
}

Object.assign(BNFLexer, {
  entries: entries,
  specialSymbols: specialSymbols
});

module.exports = BNFLexer;

