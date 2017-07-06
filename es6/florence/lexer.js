'use strict';

const entries = require('./entries'),
      FlorenceLine = require('./line'),
      CommonLexer = require('../common/lexer');

class FlorenceLexer extends CommonLexer {
  static fromCustomGrammarsLexicalPattern(customGrammarsLexicalPattern) {
    const custom = customGrammarsLexicalPattern, ///
          customGrammarEntry = {
            custom: custom
          },
          customGrammarRule =  CommonLexer.ruleFromEntry(customGrammarEntry),
          rules = CommonLexer.rulesFromEntries(entries);

    rules.addRule(customGrammarRule);

    const florenceLexer = new FlorenceLexer(rules, FlorenceLine);

    return florenceLexer;
  }

  static fromEntries(entries) {
    const rules = CommonLexer.rulesFromEntries(entries),
          florenceLexer = new FlorenceLexer(rules, FlorenceLine);

    return florenceLexer;
  }

  static fromNothing() {
    const florenceLexer = FlorenceLexer.fromEntries(entries);

    return florenceLexer;
  }
}

module.exports = FlorenceLexer;

FlorenceLexer.entries = entries;
