'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class CustomGrammarLexicalPatternLexer extends CommonLexer {
  tokeniseComments(tokensOrContents, inComment) { return inComment; }

  reTokeniseMiddleOfCommentTokens(tokensOrContents) {}

  tokeniseRegularExpressions(tokensOrContents) {}

  tokeniseStringLiterals(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(CustomGrammarLexicalPatternLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries); }
}

Object.assign(CustomGrammarLexicalPatternLexer, {
  entries
});

module.exports = CustomGrammarLexicalPatternLexer;
