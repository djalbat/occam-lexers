'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('../common/tokens/stringLiteral'),
      RegularExpressionTokens = require('../common/tokens/regularExpression');

class BNFLine extends CommonLine {
  static fromContent(content, context, rules) { 
    const line = super.fromContent(BNFLine, content, context, rules, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens);

    return line;
  }
}

module.exports = BNFLine;
