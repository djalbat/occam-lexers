'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class CustomGrammarLexicalPatternLexer extends CommonLexer {
  processCommentTokens(tokensOrContents, inComment) { return inComment; }

  postProcessMiddleOfCommentTokens(tokensOrContents) {}

  processRegularExpressionTokens(tokensOrContents) {}

  processStringLiteralTokens(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(CustomGrammarLexicalPatternLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries); }
}

Object.assign(CustomGrammarLexicalPatternLexer, {
  entries: entries
});

module.exports = CustomGrammarLexicalPatternLexer;
