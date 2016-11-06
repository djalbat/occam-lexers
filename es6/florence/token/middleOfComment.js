'use strict';

var CommentToken = require('../../common/token/comment');

class MiddleOfCommentToken extends CommentToken {
  clone() { return super.clone(MiddleOfCommentToken); }
  
  static fromContent(content, line, middleOfCommentTokenLength) {
    var middleOfCommentTokenContent = content.substring(middleOfCommentTokenLength);

    content = middleOfCommentTokenContent;  ///

    var middleOfCommentToken = new MiddleOfCommentToken(content, line);

    return middleOfCommentToken;
  }
}

module.exports = MiddleOfCommentToken;
