'use strict';

var CommentToken = require('../../common/token/comment');

class StartOfCommentToken extends CommentToken {
  static position(content) {
    var position = content.search(/\/\*/);

    return position;
  }

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
}

module.exports = StartOfCommentToken;

function first(array) { return array[0]; }
