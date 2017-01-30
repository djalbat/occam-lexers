'use strict';

var CommentTokens = require('./commentTokens'),
    CommonLine = require('../common/line'),
    StringTokens = require('../common/stringTokens'),
    EndOfLineToken = require('../common/token/endOfLine'),
    WhitespaceTokens = require('../common/whitespaceTokens');

class Line extends CommonLine {
  static fromContentAndNumber(content, number, context, rules) {
    var line = super.fromContentAndNumber(Line, content, number, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
        endOfLineToken = EndOfLineToken.fromLine(line);
    
    line.pushToken(endOfLineToken);
    
    return line;
  }
}

module.exports = Line;
