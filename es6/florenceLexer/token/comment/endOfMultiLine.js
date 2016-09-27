'use strict';

var CommentToken = require('../comment');

class EndOfMultiLineCommentToken extends CommentToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new EndOfMultiLineCommentToken(str);
  }

  static fromContent(content) {
    var matches = content.match(/^(\*\/)/);

    if (!matches) {
      return null;
    }

    var str = matches[1],
        endOfMultiLine = new EndOfMultiLineCommentToken(str);

    return endOfMultiLine;
  }

  static positionInContent(content) {
    var matches = content.match(/(.*?)\*\//);

    if (!matches) {
      return -1;
    }

    var str = matches[1],
        position = str.length;  ///

    return position;
  }
}

module.exports = EndOfMultiLineCommentToken;
