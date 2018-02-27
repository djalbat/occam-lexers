'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      CommentTokens = require('./tokens/comment'),
      EndOfLineTokens = require('./tokens/endOfLine'),
      WhitespaceTokens = require('./tokens/whitespace'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class CustomGrammarLexicalPatternLexer extends CommonLexer {
  static fromEntries(entries) {
    const rules = Rules.fromEntries(entries),
          customGrammarLexicalPatternLexer = new CustomGrammarLexicalPatternLexer(rules, EndOfLineTokens, CommentTokens, WhitespaceTokens, StringLiteralTokens, RegularExpressionTokens);

    return customGrammarLexicalPatternLexer;
  }

  static fromNothing() { return CustomGrammarLexicalPatternLexer.fromEntries(entries); }
}

module.exports = CustomGrammarLexicalPatternLexer;
