'use strict';

var CommentToken = require('../../common/token/comment');

class StartOfCommentToken extends CommentToken {
  static position(content) {
    var position = content.search(/\/\*/);

    return position;
  }

  static fromContent(content, line) {
    var startOfCommentToken = null,
        matches = content.match(/^(\/\*)/);

    if (matches) {
      var firstMatch = first(matches),
          str = firstMatch; ///

      startOfCommentToken = new CommentToken(str, line);  ///
    }
    
    return startOfCommentToken;
  }
}

module.exports = StartOfCommentToken;

function first(array) { return array[0]; }
