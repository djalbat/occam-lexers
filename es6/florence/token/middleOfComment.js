'use strict';

const CommentToken = require('../../common/token/comment');

class MiddleOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return CommentToken.clone(this, startPosition, endPosition, MiddleOfCommentToken); }

  static fromContentAndLine(content, line, length) {
    content = content.substr(0, length);  ///

    const middleOfCommentToken = CommentToken.fromContentAndLine(content, line, MiddleOfCommentToken);

    return middleOfCommentToken;
  }
}

module.exports = MiddleOfCommentToken;
