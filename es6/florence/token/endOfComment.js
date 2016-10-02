'use strict';

var CommentToken = require('../../common/token/comment');

class EndOfCommentToken extends CommentToken {
  static position(content) {
    var position = content.search(/\*\//);

    return position;
  }

  static fromContent(content) {
    var endOfCommentToken = null,
        matches = content.match(/^(\*\/)/);

    if (matches) {
      var firstMatch = first(matches),
          str = firstMatch; ///

      endOfCommentToken = new CommentToken(str);  ///
    }

    return endOfCommentToken;
  }
}

module.exports = EndOfCommentToken;

function first(array) { return array[0]; }
