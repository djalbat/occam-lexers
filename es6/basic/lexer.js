'use strict';

const Line = require('./line'),
      entries = require('./entries'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer');

class BasicLexer extends CommonLexer {
  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          basicLexer = new BasicLexer(rules, Line);

    return basicLexer;
  }

  static fromNothing() {
    const basicLexer = BasicLexer.fromEntries(entries);

    return basicLexer;
  }
}

module.exports = BasicLexer;

BasicLexer.entries = entries;
