'use strict';

const CommentTokens = require('./commentTokens'),
      CommonLine = require('../common/line'),
      StringTokens = require('../common/stringTokens'),
      WhitespaceTokens = require('../common/whitespaceTokens');

class Line extends CommonLine {
  static fromContent(content, context, rules) { return super.fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens); }
}

module.exports = Line;
