'use strict';

var CommentToken = require('../../common/token/comment');

class EndOfCommentToken extends CommentToken {
  toPosition(position) { return CommentToken.toPosition(this, position, EndOfCommentToken) }

  fromPosition(position) { return CommentToken.fromPosition(this, position, EndOfCommentToken) }

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

  static position(content) {
    var position = content.search(/\*\//);

    return position;
  }
}

module.exports = EndOfCommentToken;

function first(array) { return array[0]; }
