'use strict';

var CommentTokens = require('./commentTokens'),
    CommonLine = require('../common/line'),
    StringTokens = require('../common/stringTokens'),
    EndOfLineToken = require('../common/token/endOfLine'),
    WhitespaceTokens = require('../common/whitespaceTokens');

class Line extends CommonLine {
  static fromContent(content, context, rules) { 
    var line = super.fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
        endOfLineToken = EndOfLineToken.fromLine(line);
    
    line.pushToken(endOfLineToken);
    
    return line;
  }
}

module.exports = Line;
