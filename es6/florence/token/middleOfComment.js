'use strict';

var CommentToken = require('../../common/token/comment');

class MiddleOfCommentToken extends CommentToken {
  static fromContentAndLine(content, line, middleOfCommentTokenLength) {
    var middleOfCommentTokenContent = content.substring(0, middleOfCommentTokenLength);

    content = middleOfCommentTokenContent;  ///

    var middleOfCommentToken = CommentToken.fromContentAndLine(content, line, MiddleOfCommentToken);

    return middleOfCommentToken;
  }
}

module.exports = MiddleOfCommentToken;
