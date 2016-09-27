'use strict';

var CommentToken = require('../comment');

class StartOfMultiLineCommentToken extends CommentToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new StartOfMultiLineCommentToken(str);
  }

  static fromContent(content) {
    var matches = content.match(/^(\/\*)/);

    if (!matches) {
      return null;
    }

    var str = matches[1],
        startOfMultiLine = new StartOfMultiLineCommentToken(str);

    return startOfMultiLine;
  }

  static positionInContent(content) {
    var matches = content.match(/(.*?)\/\*/);

    if (!matches) {
      return -1;
    }

    var str = matches[1],
        position = str.length;  ///

    return position;
  }
}

module.exports = StartOfMultiLineCommentToken;
