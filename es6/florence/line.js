'use strict';

var CommentTokens = require('./commentTokens'),
    CommonLine = require('../common/line'),
    StringTokens = require('../common/stringTokens'),
    WhitespaceTokens = require('../common/whitespaceTokens'),
    EndOfLineToken = require('../common/token/significant/endOfLine');

class Line extends CommonLine {
  static fromContent(content, context, rules) {
    var line = super.fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
        lineInComment = line.isInComment();

    if (!lineInComment) {
      var endOfLineToken = EndOfLineToken.fromLine(line);

      line.pushToken(endOfLineToken);
    }

    return line;
  }
}

module.exports = Line;
