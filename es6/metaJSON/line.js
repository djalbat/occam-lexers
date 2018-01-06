'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('./tokens/whitespace'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class MetaJSONLine extends CommonLine {
  static fromContent(content, context, rules) { return super.fromContent(MetaJSONLine, content, context, rules, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens); }
}

module.exports = MetaJSONLine;
