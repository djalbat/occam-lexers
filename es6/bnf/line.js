'use strict';

const CommonLine = require('../common/line'),
      StringTokens = require('../common/tokens/string'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('../common/tokens/whitespace');

class BNFLine extends CommonLine {
  static fromContent(content, context, rules) { 
    const line = super.fromContent(BNFLine, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens);

    return line;
  }
}

module.exports = BNFLine;
