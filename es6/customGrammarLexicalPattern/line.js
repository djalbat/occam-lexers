'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('./tokens/whitespace'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class CustomGrammarLexicalPatternLine extends CommonLine {
  static fromContentRulesAndConfiguration(content, rules, configuration) {
    const customGrammarLexicalPatternLine = super.fromContentRulesAndConfiguration(CustomGrammarLexicalPatternLine, content, rules, configuration);

    customGrammarLexicalPatternLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

    return customGrammarLexicalPatternLine;
  }
}

module.exports = CustomGrammarLexicalPatternLine;
