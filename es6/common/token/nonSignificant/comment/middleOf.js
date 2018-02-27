'use strict';

const CommentToken = require('../comment');

class MiddleOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return super.clone(startPosition, endPosition); }

  static fromContent(content, length) {
    content = content.substr(0, length);  ///

    const commentToken = CommentToken.fromContent(content),
          middleOfCommentToken = commentToken;  ///

    return middleOfCommentToken;
  }
}

module.exports = MiddleOfCommentToken;
