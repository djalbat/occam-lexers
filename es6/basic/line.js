'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      StringTokens = require('./tokens/string'),
      WhitespaceTokens = require('../common/tokens/whitespace');

class Line extends CommonLine {
  static fromContent(content, context, rules) { return super.fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens); }
}

module.exports = Line;
