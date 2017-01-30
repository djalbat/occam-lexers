'use strict';

var CommentTokens = require('./commentTokens'),
    CommonLine = require('../common/line'),
    StringTokens = require('../common/stringTokens'),
    WhitespaceTokens = require('../common/whitespaceTokens');

class Line extends CommonLine {
  static fromContentAndNumber(content, number, context, rules) { return super.fromContentAndNumber(Line, content, number, context, rules, CommentTokens, StringTokens, WhitespaceTokens); }
}

module.exports = Line;
