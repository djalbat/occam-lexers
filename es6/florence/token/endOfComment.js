'use strict';

var CommentToken = require('../../common/token/comment');

class EndOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return CommentToken.clone(this, startPosition, endPosition, EndOfCommentToken); }

  static fromContentAndLine(content, line) { return CommentToken.fromContentAndLine(content, line, EndOfCommentToken); }

  static fromWithinContentAndLine(content, line) {
    var endOfCommentToken = null,
        matches = content.match(/^\*\//);

    if (matches) {
      var firstMatch = first(matches);

      content = firstMatch; ///

      endOfCommentToken = EndOfCommentToken.fromContentAndLine(content, line);
    }

    return endOfCommentToken;
  }

  static positionWithinContent(content) {
    var position = content.search(/\*\//);

    return position;
  }
}

module.exports = EndOfCommentToken;

function first(array) { return array[0]; }
