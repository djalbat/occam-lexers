'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      CommentTokens = require('../common/tokens/comment'),
      EndOfLineTokens = require('./tokens/endOfLine'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('../common/tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class FlorenceLexer extends CommonLexer {
  static fromCombinedCustomGrammarsLexicalPattern(combinedCustomGrammarsLexicalPattern) {
    const custom = combinedCustomGrammarsLexicalPattern, ///
          customGrammarEntry = {
            custom: custom
          },
          customGrammarRule =  CommonLexer.ruleFromEntry(customGrammarEntry),
          rules = CommonLexer.rulesFromEntries(entries);

    rules.addRule(customGrammarRule);

    const florenceLexer = new FlorenceLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

    return florenceLexer;
  }

  static fromEntries(entries) {
    const rules = CommonLexer.rulesFromEntries(entries),
          florenceLexer = new FlorenceLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

    return florenceLexer;
  }

  static fromNothing() { return FlorenceLexer.fromEntries(entries); }
}

Object.assign(FlorenceLexer, {
  entries: entries
});

module.exports = FlorenceLexer;
