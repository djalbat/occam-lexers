'use strict';

var CommentToken = require('../comment');

class MiddleOfCommentToken extends CommentToken {
  static fromContent(content, line) {
    var str = content, ///
        middleOf = new MiddleOfCommentToken(str, line);

    return middleOf;
  }
}

module.exports = MiddleOfCommentToken;

