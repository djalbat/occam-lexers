'use strict';

const Line = require('./line'),
      entries = require('./entries'),
      specialSymbols = require('./specialSymbols'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer');

class ExtendedBNFLexer extends CommonLexer {
  linesFromExtendedBNF(extendedBNF) {
    const content = extendedBNF,  ///
          lines = super.linesFromContent(content);

    return lines;
  }

  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          extendedBNFLexer = new ExtendedBNFLexer(rules, Line);

    return extendedBNFLexer;
  }

  static fromNothing() {
    const extendedBNFLexer = ExtendedBNFLexer.fromEntries(entries);

    return extendedBNFLexer;
  }
}

module.exports = ExtendedBNFLexer;

ExtendedBNFLexer.entries = entries;

ExtendedBNFLexer.specialSymbols = specialSymbols;
