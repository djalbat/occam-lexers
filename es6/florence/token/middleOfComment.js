'use strict';

var CommentToken = require('../../common/token/comment');

class MiddleOfCommentToken extends CommentToken {
  clone() {
    var string = this.getString(),
        line = this.getLine(),
        middleOfCommentToken = new MiddleOfCommentToken(string, line);

    return middleOfCommentToken;
  }

  static fromContent(content, line) {
    var string = content, ///
        middleOfCommentToken = new MiddleOfCommentToken(string, line);

    return middleOfCommentToken;
  }
}

module.exports = MiddleOfCommentToken;

