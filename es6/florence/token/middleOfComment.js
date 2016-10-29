'use strict';

var CommentToken = require('../../common/token/comment');

class MiddleOfCommentToken extends CommentToken {
  static fromContent(content, line) {
    var string = content, ///
        middleOfCommentToken = new MiddleOfCommentToken(string, line);

    return middleOfCommentToken;
  }
}

module.exports = MiddleOfCommentToken;

