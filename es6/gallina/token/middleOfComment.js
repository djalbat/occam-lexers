'use strict';

var CommentToken = require('../../common/token/comment');

class MiddleOfCommentToken extends CommentToken {
  static fromContent(content, line) {
    var str = content, ///
        middleOfCommentToken = new CommentToken(str, line); ///

    return middleOfCommentToken;
  }
}

module.exports = MiddleOfCommentToken;

