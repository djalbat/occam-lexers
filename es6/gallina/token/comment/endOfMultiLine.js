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

  static position(content) {
    var position = -1,
        matches = content.match(/(.*?)\*\)/);

    if (matches) {
      var firstMatch = first(matches),
          str = firstMatch;

      position = str.length;  ///
    }

    return position;
  }

  static fromContent(content) {
    var endOfMultiLineCommentToken = null,
        matches = content.match(/^(\*\))/);

    if (matches) {
      var firstMatch = first(matches),
          str = firstMatch; ///

      endOfMultiLineCommentToken = new EndOfMultiLineCommentToken(str);
    }

    return endOfMultiLineCommentToken;
  }
}

module.exports = EndOfMultiLineCommentToken;

function first(array) { return array[0]; }
