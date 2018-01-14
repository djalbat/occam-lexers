'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('./tokens/whitespace'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class PlainLine extends CommonLine {
  static fromContentRulesAndConfiguration(content, rules, configuration) {
    const plainLine = super.fromContentRulesAndConfiguration(PlainLine, content, rules, configuration);

    plainLine.initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

    return plainLine;
  }
}

module.exports = PlainLine;
