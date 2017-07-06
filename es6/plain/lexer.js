'use strict';

const PlainLine = require('./line'),
      entries = require('./entries'),
      Context = require('../common/context'),
      CommonLexer = require('../common/lexer');

class PlainLexer extends CommonLexer {
  linesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
    const context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = super.linesFromContent(content, firstLineIndex, context);

    return lines;
  }

  static fromEntries(entries) {
    const rules = CommonLexer.rulesFromEntries(entries),
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
