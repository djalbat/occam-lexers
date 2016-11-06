'use strict';

var CommonLine = require('../common/line'),
    CommentTokens = require('./commentTokens'),
    StringTokens = require('../common/stringTokens'),
    WhitespaceTokens = require('./whitespaceTokens'),
    EndOfLineToken = require('../common/token/endOfLine');

class Line extends CommonLine {
  static fromContent(content, context, rules) { 
    var line = super.fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
        endOfLineToken = EndOfLineToken.fromNothing(line);
    
    line.pushToken(endOfLineToken);
    
    return line;
  }
}

module.exports = Line;
