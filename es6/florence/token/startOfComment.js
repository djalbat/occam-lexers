'use strict';

var CommentToken = require('../../common/token/comment');

class StartOfCommentToken extends CommentToken {
  toPosition(position) { return CommentToken.toPosition(this, position, StartOfCommentToken) }

  fromPosition(position) { return CommentToken.fromPosition(this, position, StartOfCommentToken) }

  static fromContentAndLine(content, line) {
    var startOfCommentToken = null,
        matches = content.match(/^\/\*/);

    if (matches) {
      var firstMatch = first(matches);

      content = firstMatch; ///

      startOfCommentToken = CommentToken.fromContentAndLine(content, line, StartOfCommentToken);
    }
    
    return startOfCommentToken;
  }

  static position(content) {
    var position = content.search(/\/\*/);

    return position;
  }
}

module.exports = StartOfCommentToken;

function first(array) { return array[0]; }
