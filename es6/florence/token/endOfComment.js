'use strict';

var CommentToken = require('../../common/token/comment');

class EndOfCommentToken extends CommentToken {
  static position(content) {
    var position = content.search(/\*\//);

    return position;
  }

  static fromContent(content, line) {
    var endOfCommentToken = null,
        matches = content.match(/^\*\//);

    if (matches) {
      var firstMatch = first(matches),
          string = firstMatch; ///

      endOfCommentToken = new EndOfCommentToken(string, line);
    }

    return endOfCommentToken;
  }
}

module.exports = EndOfCommentToken;

function first(array) { return array[0]; }
