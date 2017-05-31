'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      StringTokens = require('../common/tokens/string'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      EndOfLineToken = require('../common/token/significant/endOfLine');

class Line extends CommonLine {
  static fromContent(content, context, rules) { 
    const line = super.fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
          endOfLineToken = EndOfLineToken.fromLine(line);

    line.pushToken(endOfLineToken);
    
    return line;
  }
}

module.exports = Line;
