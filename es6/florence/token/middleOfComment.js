'use strict';

var CommentToken = require('../../common/token/comment');

class MiddleOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return CommentToken.clone(this, startPosition, endPosition, MiddleOfCommentToken); }

  static fromContentAndLine(content, line, length) {
    content = content.substr(0, length);  ///

    var middleOfCommentToken = CommentToken.fromContentAndLine(content, line, MiddleOfCommentToken);

    return middleOfCommentToken;
  }
}

module.exports = MiddleOfCommentToken;
