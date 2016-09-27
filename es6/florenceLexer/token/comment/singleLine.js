'use strict';

var CommentToken = require('../comment');

class SingleLineCommentToken extends CommentToken {
  constructor(str) {
    super(str);
  }

  clone() {
    var str = this.getStr();

    return new SingleLineCommentToken(str);
  }

  static fromContent(content) {
    var matches = content.match(/^(\/\/.*)$/);

    if (!matches) {
      return null;
    }

    var str = matches[1],
        singleLine = new SingleLineCommentToken(str);

    return singleLine;
  }

  static positionInContent(content) {
    var matches = content.match(/(.*?)\/\//);

    if (!matches) {
      return -1;
    }

    var str = matches[1],
        position = str.length;  ///

    return position;
  }
}

module.exports = SingleLineCommentToken;
