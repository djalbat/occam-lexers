'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer');

class CustomGrammarLexicalPatternLexer extends CommonLexer {
  tokeniseComments(tokensOrContents, inComment) { return inComment; }

  tokeniseStringLiterals(tokensOrContents) {}

  tokeniseRegularExpressions(tokensOrContents) {}

  reTokeniseMiddleOfCommentTokens(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromNothing(CustomGrammarLexicalPatternLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries); }
}

Object.assign(CustomGrammarLexicalPatternLexer, {
  entries
});

module.exports = CustomGrammarLexicalPatternLexer;
