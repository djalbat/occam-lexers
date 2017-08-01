'use strict';

const CommentToken = require('../comment');

class MiddleOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return CommentToken.clone(MiddleOfCommentToken, this, startPosition, endPosition); }

  static fromContentAndLine(content, line, length) {
    content = content.substr(0, length);  ///

    const middleOfCommentToken = CommentToken.fromContentAndLine(MiddleOfCommentToken, content, line);

    return middleOfCommentToken;
  }
}

module.exports = MiddleOfCommentToken;
