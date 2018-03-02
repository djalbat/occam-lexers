'use strict';

const entries = require('../bnf/entries'),
      CommonLexer = require('../common/lexer'),
      CommentTokens = require('../bnf/tokens/comment'),
      EndOfLineTokens = require('../bnf/tokens/endOfLine'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('../common/tokens/stringLiteral'),
      RegularExpressionTokens = require('../common/tokens/regularExpression');

class CustomGrammarBNFLexer extends CommonLexer {
  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          customGrammarBNFLexer = new CustomGrammarBNFLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

    return customGrammarBNFLexer;
  }

  static fromNothing() { return CustomGrammarBNFLexer.fromEntries(entries); }
}

module.exports = CustomGrammarBNFLexer;
