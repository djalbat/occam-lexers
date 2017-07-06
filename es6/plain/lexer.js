'use strict';

const PlainLine = require('./line'),
      entries = require('./entries'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer');

class PlainLexer extends CommonLexer {
  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          plainLexer = new PlainLexer(rules, PlainLine);

    return plainLexer;
  }

  static fromNothing() {
    const plainLexer = PlainLexer.fromEntries(entries);

    return plainLexer;
  }
}

module.exports = PlainLexer;

PlainLexer.entries = entries;
