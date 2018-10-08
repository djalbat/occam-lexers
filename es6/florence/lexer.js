'use strict';

const entries = require('./entries'),
      Rule = require('../common/rule'),
      Rules = require('../common/rules'),
      CommonLexer = require('../common/lexer'),
      SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant');

class FlorenceLexer extends CommonLexer {
  tokeniseEndOfLines(tokensOrContents) { SignificantEndOfLineTokens.tokenise(tokensOrContents); }

  tokeniseRegularExpressions(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(FlorenceLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(FlorenceLexer, entries); }

  static fromCombinedCustomGrammarsLexicalPattern(combinedCustomGrammarsLexicalPattern) {
    const florenceLexer = FlorenceLexer.fromEntriesAndCombinedCustomGrammarsLexicalPattern(entries, combinedCustomGrammarsLexicalPattern);

    return florenceLexer;
  }

  static fromEntriesAndCombinedCustomGrammarsLexicalPattern(entries, combinedCustomGrammarsLexicalPattern) {
    const custom = combinedCustomGrammarsLexicalPattern, ///
          customGrammarEntry = {
            custom
          },
          customGrammarRule =  Rule.fromEntry(customGrammarEntry),
          rules = Rules.fromEntries(entries);

    rules.addRule(customGrammarRule);

    const florenceLexer = new FlorenceLexer(rules);

    return florenceLexer;
  }
}

Object.assign(FlorenceLexer, {
  entries
});

module.exports = FlorenceLexer;
