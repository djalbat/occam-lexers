'use strict';

const BasicLine = require('./line'),
      entries = require('./entries'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer');

class BasicLexer extends CommonLexer {
  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          basicLexer = new BasicLexer(rules, BasicLine);

    return basicLexer;
  }

  static fromNothing() {
    const basicLexer = BasicLexer.fromEntries(entries);

    return basicLexer;
  }
}

Object.assign(BasicLexer, {
  entries: entries
});

module.exports = BasicLexer;
