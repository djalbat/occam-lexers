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
    var startOfMultiLineCommentToken = null,
        matches = content.match(/^(\(\*)/);

    if (matches) {
      var firstMatch = first(matches),
          str = firstMatch; ///

      startOfMultiLineCommentToken = new StartOfMultiLineCommentToken(str);
    }


    return startOfMultiLineCommentToken;
  }

  static positionInContent(content) {
    var position = -1,
        matches = content.match(/(.*?)\(\*/);

    if (matches) {
      var firstMatch = first(matches),
          str = firstMatch;
      
      position = str.length;  ///
    }

    return position;
  }
}

module.exports = StartOfMultiLineCommentToken;

function first(array) { return array[0]; }
