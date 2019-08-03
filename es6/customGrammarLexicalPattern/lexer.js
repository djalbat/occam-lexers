'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      SignificantEndOfLineTokens = require('../common/tokens/endOfLine/significant')

class CustomGrammarLexicalPatternLexer extends CommonLexer {
  tokeniseComments(tokensOrContents, inComment) { return inComment; }

  tokeniseEndOfLines(tokensOrContents) { SignificantEndOfLineTokens.tokenise(tokensOrContents); }

  tokeniseRegularExpressions(tokensOrContents) {}

  tokeniseDoublyQuotedStringLiterals(tokensOrContents) {}

  tokeniseSinglyQuotedStringLiterals(tokensOrContents) {}

  static fromNothing() { return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries); }
}

Object.assign(CustomGrammarLexicalPatternLexer, {
  entries
});

module.exports = CustomGrammarLexicalPatternLexer;
