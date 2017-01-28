'use strict';

var CommentToken = require('../../common/token/comment');

class EndOfCommentToken extends CommentToken {
  static position(content) {
    var position = content.search(/\*\//);

    return position;
  }

  static fromContentAndLine(content, line) {
    var endOfCommentToken = null,
        matches = content.match(/^\*\//);

    if (matches) {
      var firstMatch = first(matches);

      content = firstMatch; ///

      endOfCommentToken = CommentToken.fromContentAndLine(content, line, EndOfCommentToken);
    }

    return endOfCommentToken;
  }
}

module.exports = EndOfCommentToken;

function first(array) { return array[0]; }
