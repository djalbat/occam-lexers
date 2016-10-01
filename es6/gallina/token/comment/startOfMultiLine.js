'use strict';

var CommentToken = require('../comment');

class StartOfMultiLineCommentToken extends CommentToken {
  clone() {
    var str = this.getStr();

    return new StartOfMultiLineCommentToken(str);
  }

  static position(content) {
    var position = content.search(/\(\*/);

    return position;
  }

  static fromContent(content, line) {
    var startOfMultiLineCommentToken = null,
        matches = content.match(/^(\(\*)/);

    if (matches) {
      var firstMatch = first(matches),
          str = firstMatch; ///

      startOfMultiLineCommentToken = new StartOfMultiLineCommentToken(str, line);
    }


    return startOfMultiLineCommentToken;
  }
}

module.exports = StartOfMultiLineCommentToken;

function first(array) { return array[0]; }
