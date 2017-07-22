'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class BasicLine extends CommonLine {
  static fromContent(content, context, rules) { return super.fromContent(BasicLine, content, context, rules, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens); }
}

module.exports = BasicLine;
