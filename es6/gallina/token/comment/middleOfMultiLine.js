'use strict';

var CommentToken = require('../comment');

class MiddleOfMultiLineCommentToken extends CommentToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new MiddleOfMultiLineCommentToken(str);
  }

  static fromContent(content) {
    var str = content, ///
        middleOfMultiLine = new MiddleOfMultiLineCommentToken(str);

    return middleOfMultiLine;
  }
}

module.exports = MiddleOfMultiLineCommentToken;

