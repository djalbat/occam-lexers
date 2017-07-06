'use strict';

const CommonLine = require('../common/line'),
      StringTokens = require('../common/tokens/string'),
      CommentTokens = require('../common/tokens/comment'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      EndOfLineToken = require('../common/token/significant/endOfLine');

class FlorenceLine extends CommonLine {
  static fromContent(content, context, rules) {
    const line = super.fromContent(FlorenceLine, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
          lineInComment = line.isInComment();

    if (!lineInComment) {
      const endOfLineToken = EndOfLineToken.fromLine(line);

      line.pushToken(endOfLineToken);
    }

    return line;
  }
}

module.exports = FlorenceLine;
