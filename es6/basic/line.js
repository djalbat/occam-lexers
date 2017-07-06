'use strict';

const CommonLine = require('../common/line'),
      StringTokens = require('./tokens/string'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('../common/tokens/whitespace');

class BasicLine extends CommonLine {
  static fromContent(content, context, rules) { return super.fromContent(BasicLine, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens); }
}

module.exports = BasicLine;
