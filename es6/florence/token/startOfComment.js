'use strict';

var CommentToken = require('../../common/token/comment');

class StartOfCommentToken extends CommentToken {
  clone(startPosition, endPosition) { return CommentToken.clone(this, startPosition, endPosition, StartOfCommentToken); }

  static fromContentAndLine(content, line) { return CommentToken.fromContentAndLine(content, line, StartOfCommentToken); }

  static fromWithinContentAndLine(content, line) {
    var startOfCommentToken = null,
        matches = content.match(/^\/\*/);

    if (matches) {
      var firstMatch = first(matches);

      content = firstMatch; ///

      startOfCommentToken = StartOfCommentToken.fromContentAndLine(content, line);
    }
    
    return startOfCommentToken;
  }

  static positionWithinContent(content) {
    var position = content.search(/\/\*/);

    return position;
  }
}

module.exports = StartOfCommentToken;

function first(array) { return array[0]; }
