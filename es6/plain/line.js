'use strict';

const CommonLine = require('../common/line'),
      StringTokens = require('./tokens/string'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('./tokens/whitespace');

class PlainLine extends CommonLine {
  static fromContent(content, context, rules) { return super.fromContent(PlainLine, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens); }
}

module.exports = PlainLine;
