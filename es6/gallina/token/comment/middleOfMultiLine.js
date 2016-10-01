'use strict';

var CommentToken = require('../comment');

class MiddleOfMultiLineCommentToken extends CommentToken {
  clone() {
    var str = this.getStr();

    return new MiddleOfMultiLineCommentToken(str);
  }

  static fromContent(content, line) {
    var str = content, ///
        middleOfMultiLine = new MiddleOfMultiLineCommentToken(str, line);

    return middleOfMultiLine;
  }
}

module.exports = MiddleOfMultiLineCommentToken;

