'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('../common/tokens/comment'),
      StringTokens = require('../common/tokens/string'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      EndOfLineToken = require('../common/token/significant/endOfLine');

class Line extends CommonLine {
  static fromContent(content, context, rules) {
    const line = super.fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
          lineInComment = line.isInComment();

    if (!lineInComment) {
      const endOfLineToken = EndOfLineToken.fromLine(line);

      line.pushToken(endOfLineToken);
    }

    return line;
  }
}

module.exports = Line;
