'use strict';

var CommentToken = require('../../common/token/comment');

class MiddleOfCommentToken extends CommentToken {
  clone() {
    var content = this.getContent(),
        line = this.getLine(),
        middleOfCommentToken = new MiddleOfCommentToken(content, line);

    return middleOfCommentToken;
  }

  static fromContent(content, line) {
    var middleOfCommentToken = new MiddleOfCommentToken(content, line);

    return middleOfCommentToken;
  }
}

module.exports = MiddleOfCommentToken;

