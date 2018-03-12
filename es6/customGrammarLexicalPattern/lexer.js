'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      NonSignificantEndOfLineTokens = require('../common/tokens/endOfLine/nonSignificant');

class CustomGrammarLexicalPatternLexer extends CommonLexer {
  processEndOfLineTokens(tokensOrContents) {
    NonSignificantEndOfLineTokens.process(tokensOrContents);
  }

  processCommentTokens(tokensOrContents, inComment) { return inComment; }

  processRegularExpressionTokens(tokensOrContents) {}

  processStringLiteralTokens(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(CustomGrammarLexicalPatternLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries); }
}

Object.assign(CustomGrammarLexicalPatternLexer, {
  entries: entries
});

module.exports = CustomGrammarLexicalPatternLexer;
