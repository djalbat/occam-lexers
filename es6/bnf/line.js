'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      StringTokens = require('../common/tokens/string'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      RegularExpressionTokens = require('../common/tokens/regularExpression');

class BNFLine extends CommonLine {
  static fromContent(content, context, rules) { 
    const line = super.fromContent(BNFLine, content, context, rules, CommentTokens, RegularExpressionTokens, StringTokens, WhitespaceTokens);

    return line;
  }
}

module.exports = BNFLine;
