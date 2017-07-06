'use strict';

const Line = require('./line'),
      entries = require('./entries'),
      Context = require('../common/context'),
      CommonLexer = require('../common/lexer');

class FlorenceLexer extends CommonLexer {
  linesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
    const context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = super.linesFromContent(content, firstLineIndex, context);

    return lines;
  }

  static fromCustomGrammarsLexicalPattern(customGrammarsLexicalPattern) {
    const custom = customGrammarsLexicalPattern, ///
          customGrammarEntry = {
            custom: custom
          },
          customGrammarRule =  CommonLexer.ruleFromEntry(customGrammarEntry),
          rules = CommonLexer.rulesFromEntries(entries);

    rules.addRule(customGrammarRule);

    const florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }

  static fromEntries(entries) {
    const rules = CommonLexer.rulesFromEntries(entries),
          florenceLexer = new FlorenceLexer(rules, Line);

    return florenceLexer;
  }

  static fromNothing() {
    const florenceLexer = FlorenceLexer.fromEntries(entries);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;

FlorenceLexer.entries = entries;
