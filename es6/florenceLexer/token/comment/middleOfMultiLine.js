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
        middleOfMultiLineToken = new MiddleOfMultiLineCommentToken(str);

    return middleOfMultiLineToken;
  }
}

module.exports = MiddleOfMultiLineCommentToken;

