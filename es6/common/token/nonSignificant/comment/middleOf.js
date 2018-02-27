'use strict';

const CommentToken = require('../comment');

class MiddleOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return super.clone(MiddleOfCommentToken, startPosition, endPosition); }

  static fromContent(content, length) {
    content = content.substr(0, length);  ///

    const commentToken = CommentToken.fromContent(MiddleOfCommentToken, content),
          middleOfCommentToken = commentToken;  ///

    return middleOfCommentToken;
  }
}

const type = 'comment';

Object.assign(MiddleOfCommentToken, {
  type: type
});

module.exports = MiddleOfCommentToken;
